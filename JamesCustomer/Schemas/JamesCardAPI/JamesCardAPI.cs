using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Linq;
using System.Globalization;
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
        [DataMember]
        public string CustomerId { get; set; }
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
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public ReponseModel DeleteCard(string cardId)
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

                var selectCard = new Select(UserConnection)
                    .Column("Id")
                    .From("JamesCard")
                    .Where("Id").IsEqual(Column.Parameter(validCardId)) as Select;

                bool cardExists = false;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    using (var reader = selectCard.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            cardExists = true;
                        }
                    }
                }

                if (!cardExists)
                {
                    return new ReponseModel
                    {
                        StatusCode = 404,
                        Message = "Card doesn't exist!",
                        Data = null
                    };
                }

                var deleteCard = new Delete(UserConnection)
                    .From("JamesCard")
                    .Where("Id").IsEqual(Column.Parameter(validCardId)) as Delete;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    deleteCard.Execute(dbExecutor);
                }

                return new ReponseModel
                {
                    StatusCode = 200,
                    Message = "Card successfully deleted!",
                    Data = null
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
        public ReponseModel CreateCard(
            string CardNumber,
            string CardType,
            string ExpiryDate,
            string CustomerPINFL)
        {
            try
            {
                if (!ValidatePINFL(CustomerPINFL))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid PINFL. Please provide a valid 14-digit PINFL.",
                        Data = null
                    };
                }

                if (!ValidateCardNumber(CardNumber))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Enter a valid card number in the format 1234-5678-9876-5432.",
                        Data = null
                    };
                }

                if (!ValidateCardType(CardType))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid card type. Please provide a valid card type.",
                        Data = null
                    };
                }

                if (!DateTime.TryParseExact(ExpiryDate, "yyyy-MM", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime parsedExpiryDate))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid expiry date format. Please use yyyy-MM.",
                        Data = null
                    };
                }

                if (parsedExpiryDate <= DateTime.UtcNow)
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Expiry date must be in the future.",
                        Data = null
                    };
                }

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    var selectCardType = new Select(UserConnection)
                        .Column("Id")
                        .Column("Name")
                        .From("JamesCardType")
                        .Where("Name").IsEqual(Column.Parameter(CardType)) as Select;

                    Guid cardTypeId;
                    string cardTypeName = null;
                    using (var reader = selectCardType.ExecuteReader(dbExecutor))
                    {
                        if (!reader.Read())
                        {
                            return new ReponseModel
                            {
                                StatusCode = 404,
                                Message = "Card type does not exist. Please provide a valid card type.",
                                Data = null
                            };
                        }

                        cardTypeId = reader.GetGuid(reader.GetOrdinal("Id"));
                        cardTypeName = reader.GetString(reader.GetOrdinal("Name"));
                    }

                    var selectCustomer = new Select(UserConnection)
                        .Column("Id")
                        .From("JamesCustomer")
                        .Where("JamesPINFL").IsEqual(Column.Parameter(CustomerPINFL)) as Select;

                    Guid customerId;
                    using (var reader = selectCustomer.ExecuteReader(dbExecutor))
                    {
                        if (!reader.Read())
                        {
                            return new ReponseModel
                            {
                                StatusCode = 404,
                                Message = "Customer with the provided PINFL does not exist. This card must be associated with a valid customer PINFL.",
                                Data = null
                            };
                        }

                        customerId = reader.GetGuid(reader.GetOrdinal("Id"));
                    }

                    Guid cardId = Guid.NewGuid();

                    var insertCard = new Insert(UserConnection)
                        .Into("JamesCard")
                        .Set("Id", Column.Parameter(cardId))
                        .Set("JamesCardNumber", Column.Parameter(CardNumber))
                        .Set("JamesCardTypeId", Column.Parameter(cardTypeId))
                        .Set("JamesExpiryDate", Column.Parameter(parsedExpiryDate))
                        .Set("JamesCustomerId", Column.Parameter(customerId))
                        .Set("CreatedOn", Column.Parameter(DateTime.UtcNow))
                        .Set("ModifiedOn", Column.Parameter(DateTime.UtcNow)) as Insert;

                    insertCard.Execute(dbExecutor);

                    return new ReponseModel
                    {
                        StatusCode = 200,
                        Message = "Card created successfully.",
                        Data = "success"
                    };
                }
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
        public ReponseModel ModifyCard(
            string cardId,
            string CardNumber,
            string CardType,
            string ExpiryDate)
        {
            try
            {
                if (string.IsNullOrEmpty(cardId))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Card ID cannot be null or empty.",
                        Data = null
                    };
                }

                if (!ValidateCardNumber(CardNumber))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Enter a valid card number in the format 1234-5678-9876-5432.",
                        Data = null
                    };
                }

                if (!ValidateCardType(CardType))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid card type. Please provide a valid card type.",
                        Data = null
                    };
                }

                if (!DateTime.TryParseExact(ExpiryDate, "yyyy-MM", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime parsedExpiryDate))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid expiry date format. Please use yyyy-MM.",
                        Data = null
                    };
                }

                if (parsedExpiryDate <= DateTime.UtcNow)
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Expiry date must be in the future.",
                        Data = null
                    };
                }

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    var selectCardType = new Select(UserConnection)
                        .Column("Id")
                        .From("JamesCardType")
                        .Where("Name").IsEqual(Column.Parameter(CardType)) as Select;

                    Guid cardTypeId;
                    using (var reader = selectCardType.ExecuteReader(dbExecutor))
                    {
                        if (!reader.Read())
                        {
                            return new ReponseModel
                            {
                                StatusCode = 404,
                                Message = "Card type does not exist. Please provide a valid card type.",
                                Data = null
                            };
                        }

                        cardTypeId = reader.GetGuid(reader.GetOrdinal("Id"));
                    }

                    var selectCard = new Select(UserConnection)
                        .Column("Id")
                        .From("JamesCard")
                        .Where("Id").IsEqual(Column.Parameter(cardId)) as Select;

                    using (var reader = selectCard.ExecuteReader(dbExecutor))
                    {
                        if (!reader.Read())
                        {
                            return new ReponseModel
                            {
                                StatusCode = 404,
                                Message = "Card with the provided ID does not exist.",
                                Data = null
                            };
                        }
                    }

                    var updateCard = new Update(UserConnection, "JamesCard")
                        .Set("JamesCardNumber", Column.Parameter(CardNumber))
                        .Set("JamesCardTypeId", Column.Parameter(cardTypeId))
                        .Set("JamesExpiryDate", Column.Parameter(parsedExpiryDate))
                        .Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
                        .Where("Id").IsEqual(Column.Parameter(cardId));

                    updateCard.Execute(dbExecutor);

                    return new ReponseModel
                    {
                        StatusCode = 200,
                        Message = "Card updated successfully.",
                        Data = "success"
                    };
                }
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
        private bool ValidatePINFL(string pinfl)
        {
            if (string.IsNullOrEmpty(pinfl))
            {
                return false;
            }

            return pinfl.Length == 14 && pinfl.All(char.IsDigit);
        }
        private bool ValidateCardNumber(string cardNumber)
        {
            if (string.IsNullOrWhiteSpace(cardNumber))
            {
                return false;
            }

            string pattern = @"^\d{4}-\d{4}-\d{4}-\d{4}$";
            return Regex.IsMatch(cardNumber, pattern);
        }
        private bool ValidateCardType(string cardType)
        {
            if (string.IsNullOrWhiteSpace(cardType))
            {
                return false;
            }

            var validCardTypes = new List<string> { "Visa", "MasterCard", "Amex" };

            return validCardTypes.Any(validType => validType.Equals(cardType, StringComparison.OrdinalIgnoreCase));
        }
        #endregion
    }
}
