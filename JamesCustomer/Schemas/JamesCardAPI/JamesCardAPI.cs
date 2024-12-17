using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Linq;
using System.Web.SessionState;
using System.Text.RegularExpressions;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;
using Terrasoft.Core;
using System.Data;

namespace Terrasoft.Configuration
{

    #region Data Models
    [DataContract]
    public class CardModel
    {
        [DataMember]
        public string Id { get; set; }

        [DataMember]
        public string CardNumber { get; set; }

        [DataMember]
        public string CardType { get; set; }

        [DataMember]
        public string ExpiryDate { get; set; }

        [DataMember]
        public string CustomerPINFL { get; set; }
    }
    #endregion

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class CardAPI : BaseService, IReadOnlySessionState
    {

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public ReponseModel GetAllCards()
        {
            try
            {
                var cards = new List<CardModel>();

                var selectcards = new Select(UserConnection)
                    .Column("JamesCard", "Id")
                    .Column("JamesCard", "JamesCardNumber")
                    .Column("JamesCard", "JamesExpiryDate")
                    .Column("JamesCustomer", "JamesPINFL")
                    .Column("JamesCardType", "Name").As("CardType")
                    .From("JamesCard")
                    .InnerJoin("JamesCustomer").On("JamesCard", "JamesCustomerId").IsEqual("JamesCustomer", "Id")
                    .InnerJoin("JamesCardType").On("JamesCard", "JamesCardTypeId").IsEqual("JamesCardType", "Id") as Select;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    using (var reader = selectcards.ExecuteReader(dbExecutor))
                    {
                        while (reader.Read())
                        {
                            cards.Add(new CardModel
                            {
                                Id = reader.GetGuid(reader.GetOrdinal("Id")).ToString(),
                                CardNumber = reader.GetString(reader.GetOrdinal("JamesCardNumber")),
                                ExpiryDate = reader.GetDateTime(reader.GetOrdinal("JamesExpiryDate")).ToString("yyyy-MM-dd"),
                                CustomerPINFL = reader.GetString(reader.GetOrdinal("JamesPINFL")),
                                CardType = reader.GetString(reader.GetOrdinal("CardType"))
                            });
                        }
                    }
                }

                if (cards.Count == 0)
                {
                    return new ReponseModel
                    {
                        StatusCode = 404,
                        Message = "There are no cards yet!",
                        Data = null
                    };
                }

                string jsonData = SerializeToJson(cards);

                return new ReponseModel
                {
                    StatusCode = 200,
                    Message = "Success",
                    Data = jsonData
                };
            }
            catch (Exception ex)
            {
                return new ReponseModel
                {
                    StatusCode = 500,
                    Message = ex.Message,
                    Data = null
                };
            }
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public ReponseModel GetCardById(string cardId)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(cardId) || !Guid.TryParse(cardId, out Guid validCardId))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid card ID format!",
                        Data = null
                    };
                }

                CardModel card = null;

                var selectCard = new Select(UserConnection)
                    .Column("JamesCard", "Id")
                    .Column("JamesCard", "JamesCardNumber")
                    .Column("JamesCard", "JamesExpiryDate")
                    .Column("JamesCustomer", "JamesPINFL")
                    .Column("JamesCardType", "Name").As("CardType")
                    .From("JamesCard")
                    .InnerJoin("JamesCustomer").On("JamesCard", "JamesCustomerId").IsEqual("JamesCustomer", "Id")
                    .InnerJoin("JamesCardType").On("JamesCard", "JamesCardTypeId").IsEqual("JamesCardType", "Id")
                    .Where("JamesCard", "Id").IsEqual(Column.Parameter(validCardId)) as Select;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    using (var reader = selectCard.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            card = new CardModel
                            {
                                Id = reader.GetGuid(reader.GetOrdinal("Id")).ToString(),
                                CardNumber = reader.GetString(reader.GetOrdinal("JamesCardNumber")),
                                ExpiryDate = reader.GetDateTime(reader.GetOrdinal("JamesExpiryDate")).ToString("yyyy-MM-dd"),
                                CustomerPINFL = reader.GetString(reader.GetOrdinal("JamesPINFL")),
                                CardType = reader.GetString(reader.GetOrdinal("CardType"))
                            };
                        }
                    }
                }

                if (card == null)
                {
                    return new ReponseModel
                    {
                        StatusCode = 404,
                        Message = "Card not found!",
                        Data = null
                    };
                }

                string jsonData = SerializeToJson(card);

                return new ReponseModel
                {
                    StatusCode = 200,
                    Message = "Success",
                    Data = jsonData
                };
            }
            catch (Exception ex)
            {
                return new ReponseModel
                {
                    StatusCode = 500,
                    Message = ex.Message,
                    Data = null
                };
            }
        }



        [OperationContract]
        [WebInvoke(Method = "PUT", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string CreateCard()
        {
            return "success!";
        }

        #region Private Methods
        private string SerializeToJson(object obj)
        {
            try
            {
                using (var memoryStream = new MemoryStream())
                {
                    var serializer = new DataContractJsonSerializer(obj.GetType());

                    serializer.WriteObject(memoryStream, obj);

                    memoryStream.Position = 0;

                    using (var reader = new StreamReader(memoryStream))
                    {
                        return reader.ReadToEnd();
                    }
                }
            }
            catch (Exception ex)
            {
                return $"Error: {ex.Message}";
            }
        }

        private bool ValidateFullName(string fullName)
        {
            if (string.IsNullOrEmpty(fullName) || fullName.Length < 3)
            {
                return false;
            }

            return fullName.All(c => char.IsLetter(c) || c == ' ');
        }
        private bool ValidateEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return false;
            }

            var emailPattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";
            return Regex.IsMatch(email, emailPattern);
        }
        private bool ValidatePhone(string phone)
        {
            if (string.IsNullOrEmpty(phone))
            {
                return false;
            }

            if (phone.Length < 10 || phone.Length > 15)
            {
                return false;
            }

            return phone.All(c => char.IsDigit(c) || c == '+' || c == '-');
        }
        private bool ValidateDateOfBirth(DateTime dateOfBirth)
        {
            DateTime minimumDate = DateTime.Today.AddYears(-18);
            return dateOfBirth <= minimumDate;
        }
        private bool ValidatePINFL(string pinfl)
        {
            if (string.IsNullOrEmpty(pinfl))
            {
                return false;
            }

            return pinfl.Length == 14 && pinfl.All(char.IsDigit);
        }


        #endregion
    }
}
