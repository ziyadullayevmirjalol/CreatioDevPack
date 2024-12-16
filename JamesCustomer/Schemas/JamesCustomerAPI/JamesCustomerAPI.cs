using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Linq;
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
    public class ReponseModel
    {
        [DataMember]
        public int StatusCode { get; set; }

        [DataMember]
        public string Message { get; set; }

        [DataMember]
        public object Data { get; set; }
    }

    [DataContract]
    public class CustomerModel
    {
        [DataMember]
        public string Id { get; set; }

        [DataMember]
        public string FullName { get; set; }

        [DataMember]
        public string Email { get; set; }

        [DataMember]
        public string PINFL { get; set; }

        [DataMember]
        public string Phone { get; set; }

        [DataMember]
        public string DateOfBirth { get; set; }

    }

    #endregion

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class CustomerAPI : BaseService
    {

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public ReponseModel GetAllCustomers()
        {
            try
            {
                var customers = new List<CustomerModel>();

                var selectCustomers = new Select(UserConnection)
                    .Column("Id")
                    .Column("JamesFullName")
                    .Column("JamesEmail")
                    .Column("JamesPINFL")
                    .From("JamesCustomer") as Select;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    using (var reader = selectCustomers.ExecuteReader(dbExecutor))
                    {
                        while (reader.Read())
                        {
                            customers.Add(new CustomerModel
                            {
                                Id = reader.GetGuid(reader.GetOrdinal("Id")).ToString(),
                                FullName = reader.GetString(reader.GetOrdinal("JamesFullName")),
                                Email = reader.GetString(reader.GetOrdinal("JamesEmail")),
                                PINFL = reader.GetString(reader.GetOrdinal("JamesPINFL"))
                            });
                        }
                    }
                }

                if (customers.Count == 0)
                {
                    return new ReponseModel
                    {
                        StatusCode = 404,
                        Message = "There are no customers yet!",
                        Data = null
                    };
                }

                string jsonData = SerializeToJson(customers);

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
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public ReponseModel RegisterCustomer(
            string FullName,
            string Email,
            string Phone,
            string PINFL,
            DateTime DateOfBirth)
        {
            try
            {
                if (!ValidateFullName(FullName))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Name must be at least 3 characters long and cannot contain numbers or special characters",
                        Data = null
                    };
                }

                if (!ValidateEmail(Email))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Enter a valid email address!",
                        Data = null
                    };
                }
                if (!ValidatePhone(Phone))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Enter a valid phone number!",
                        Data = null
                    };
                }
                if (!ValidatePINFL(PINFL))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "PINFL must be exactly 14 digits.",
                        Data = null
                    };
                }
                if (!ValidateDateOfBirth(DateOfBirth))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Date of Birth must be at least 18 years ago.",
                        Data = null
                    };
                }



                // Your logic to register the customer goes here.

                return new ReponseModel
                {
                    StatusCode = 200,
                    Message = "Customer registered successfully.",
                    Data = "complete",
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
