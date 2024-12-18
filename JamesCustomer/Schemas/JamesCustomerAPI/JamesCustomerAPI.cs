using System;
using System.IO;
using System.Net;
using System.Linq;
using System.Collections.Generic;
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
    public class CustomerAPI : BaseService, IReadOnlySessionState
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
                    .Column("JamesPhone")
                    .Column("JamesDateOfBirth")
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
                                PINFL = reader.GetString(reader.GetOrdinal("JamesPINFL")),
                                Phone = reader.GetString(reader.GetOrdinal("JamesPhone")),
                                DateOfBirth = reader.GetDateTime(reader.GetOrdinal("JamesDateOfBirth")).ToString("yyyy-MM-dd")
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
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public ReponseModel GetCustomerById(string customerId)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(customerId) || !Guid.TryParse(customerId, out Guid validCustomerId))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid customer ID format!",
                        Data = null
                    };
                }

                CustomerModel customer = null;

                var selectCustomer = new Select(UserConnection)
                    .Column("Id")
                    .Column("JamesFullName")
                    .Column("JamesEmail")
                    .Column("JamesPhone")
                    .Column("JamesDateOfBirth")
                    .Column("JamesPINFL")
                    .From("JamesCustomer")
                    .Where("Id").IsEqual(Column.Parameter(validCustomerId)) as Select;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    using (var reader = selectCustomer.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            customer = new CustomerModel
                            {
                                Id = reader.GetGuid(reader.GetOrdinal("Id")).ToString(),
                                FullName = reader.GetString(reader.GetOrdinal("JamesFullName")),
                                Email = reader.GetString(reader.GetOrdinal("JamesEmail")),
                                PINFL = reader.GetString(reader.GetOrdinal("JamesPINFL")),
                                Phone = reader.GetString(reader.GetOrdinal("JamesPhone")),
                                DateOfBirth = reader.GetDateTime(reader.GetOrdinal("JamesDateOfBirth")).ToString("yyyy-MM-dd")
                            };
                        }
                    }
                }

                if (customer == null)
                {
                    return new ReponseModel
                    {
                        StatusCode = 404,
                        Message = "Customer not found!",
                        Data = null
                    };
                }

                string jsonData = SerializeToJson(customer);

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
        public ReponseModel DeleteCustomer(string customerId)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(customerId) || !Guid.TryParse(customerId, out Guid validCustomerId))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid customer ID format!",
                        Data = null
                    };
                }

                var selectCustomer = new Select(UserConnection)
                    .Column("Id")
                    .From("JamesCustomer")
                    .Where("Id").IsEqual(Column.Parameter(validCustomerId)) as Select;

                bool customerExists = false;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    using (var reader = selectCustomer.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            customerExists = true;
                        }
                    }
                }

                if (!customerExists)
                {
                    return new ReponseModel
                    {
                        StatusCode = 404,
                        Message = "Customer not found!",
                        Data = null
                    };
                }

                var deleteCustomer = new Delete(UserConnection)
                    .From("JamesCustomer")
                    .Where("Id").IsEqual(Column.Parameter(validCustomerId)) as Delete;

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    deleteCustomer.Execute(dbExecutor);
                }

                return new ReponseModel
                {
                    StatusCode = 200,
                    Message = "Customer successfully deleted!",
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
        public ReponseModel RegisterCustomer(
            string FullName,
            string Email,
            string Phone,
            string PINFL,
            string DateOfBirth)
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

                DateTime parsedDateOfBirth;
                if (!DateTime.TryParseExact(DateOfBirth, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out parsedDateOfBirth))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid Date format. Please use yyyy-MM-dd.",
                        Data = null
                    };
                }

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    var existingCustomerCheck = new Select(UserConnection)
                        .Column("Id")
                        .From("JamesCustomer")
                        .Where("JamesPINFL").IsEqual(Column.Parameter(PINFL))
                        .Or("JamesPhone").IsEqual(Column.Parameter(Phone)) as Select;

                    using (var reader = existingCustomerCheck.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            return new ReponseModel
                            {
                                StatusCode = 409,
                                Message = "A customer with the same PINFL or phone number already exists.",
                                Data = null
                            };
                        }
                    }

                    Guid customerId = Guid.NewGuid();

                    var insertCustomer = new Insert(UserConnection)
                        .Into("JamesCustomer")
                        .Set("Id", Column.Parameter(customerId))
                        .Set("JamesFullName", Column.Parameter(FullName))
                        .Set("JamesEmail", Column.Parameter(Email))
                        .Set("JamesPhone", Column.Parameter(Phone))
                        .Set("JamesPINFL", Column.Parameter(PINFL))
                        .Set("JamesDateOfBirth", Column.Parameter(parsedDateOfBirth))
                        .Set("CreatedOn", Column.Parameter(DateTime.UtcNow))
                        .Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
                        as Insert;

                    insertCustomer.Execute(dbExecutor);

                    var selectCustomer = new Select(UserConnection)
                        .Column("Id")
                        .Column("JamesFullName")
                        .Column("JamesEmail")
                        .Column("JamesPhone")
                        .Column("JamesPINFL")
                        .Column("JamesDateOfBirth")
                        .From("JamesCustomer")
                        .Where("Id").IsEqual(Column.Parameter(customerId)) as Select;

                    CustomerModel newCustomer = null;

                    using (var reader = selectCustomer.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            newCustomer = new CustomerModel
                            {
                                Id = reader.GetGuid(reader.GetOrdinal("Id")).ToString(),
                                FullName = reader.GetString(reader.GetOrdinal("JamesFullName")),
                                Email = reader.GetString(reader.GetOrdinal("JamesEmail")),
                                Phone = reader.GetString(reader.GetOrdinal("JamesPhone")),
                                PINFL = reader.GetString(reader.GetOrdinal("JamesPINFL")),
                                DateOfBirth = reader.GetDateTime(reader.GetOrdinal("JamesDateOfBirth")).ToString("yyyy-MM-dd")
                            };
                        }
                    }

                    if (newCustomer == null)
                    {
                        return new ReponseModel
                        {
                            StatusCode = 404,
                            Message = "Failed to retrieve created customer.",
                            Data = null
                        };
                    }

                    string jsonData = SerializeToJson(newCustomer);

                    return new ReponseModel
                    {
                        StatusCode = 200,
                        Message = "Customer registered successfully.",
                        Data = jsonData
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
        public ReponseModel ModifyCustomer(
            string customerId,
            string FullName,
            string Email,
            string Phone,
            string PINFL,
            string DateOfBirth)
        {
            try
            {
                if (!Guid.TryParse(customerId, out Guid parsedCustomerId))
                {
                    return new ReponseModel
                    {
                        StatusCode = 400,
                        Message = "Invalid customer ID format.",
                        Data = null
                    };
                }

                using (var dbExecutor = UserConnection.EnsureDBConnection())
                {
                    var retrieveCustomer = new Select(UserConnection)
                        .Column("Id")
                        .Column("JamesFullName")
                        .Column("JamesEmail")
                        .Column("JamesPhone")
                        .Column("JamesPINFL")
                        .Column("JamesDateOfBirth")
                        .From("JamesCustomer")
                        .Where("Id").IsEqual(Column.Parameter(parsedCustomerId)) as Select;

                    CustomerModel existingCustomer = null;
                    using (var reader = retrieveCustomer.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            existingCustomer = new CustomerModel
                            {
                                Id = reader.GetGuid(reader.GetOrdinal("Id")).ToString(),
                                FullName = reader.GetString(reader.GetOrdinal("JamesFullName")),
                                Email = reader.GetString(reader.GetOrdinal("JamesEmail")),
                                Phone = reader.GetString(reader.GetOrdinal("JamesPhone")),
                                PINFL = reader.GetString(reader.GetOrdinal("JamesPINFL")),
                                DateOfBirth = reader.GetDateTime(reader.GetOrdinal("JamesDateOfBirth")).ToString("yyyy-MM-dd")
                            };
                        }
                    }

                    if (existingCustomer == null)
                    {
                        return new ReponseModel
                        {
                            StatusCode = 404,
                            Message = "Customer does not exist.",
                            Data = null
                        };
                    }

                    string updatedFullName = string.IsNullOrEmpty(FullName) ? existingCustomer.FullName : FullName;
                    if (!string.IsNullOrEmpty(FullName) && !ValidateFullName(FullName))
                    {
                        return new ReponseModel
                        {
                            StatusCode = 400,
                            Message = "Name must be at least 3 characters long and cannot contain numbers or special characters",
                            Data = null
                        };
                    }

                    string updatedEmail = string.IsNullOrEmpty(Email) ? existingCustomer.Email : Email;
                    if (!string.IsNullOrEmpty(Email) && !ValidateEmail(Email))
                    {
                        return new ReponseModel
                        {
                            StatusCode = 400,
                            Message = "Enter a valid email address!",
                            Data = null
                        };
                    }

                    string updatedPhone = string.IsNullOrEmpty(Phone) ? existingCustomer.Phone : Phone;
                    if (!string.IsNullOrEmpty(Phone) && !ValidatePhone(Phone))
                    {
                        return new ReponseModel
                        {
                            StatusCode = 400,
                            Message = "Enter a valid phone number!",
                            Data = null
                        };
                    }

                    string updatedPINFL = string.IsNullOrEmpty(PINFL) ? existingCustomer.PINFL : PINFL;
                    if (!string.IsNullOrEmpty(PINFL) && !ValidatePINFL(PINFL))
                    {
                        return new ReponseModel
                        {
                            StatusCode = 400,
                            Message = "PINFL must be exactly 14 digits.",
                            Data = null
                        };
                    }

                    string updatedDateOfBirth = existingCustomer.DateOfBirth;
                    if (!string.IsNullOrEmpty(DateOfBirth))
                    {
                        if (!DateTime.TryParseExact(DateOfBirth, "yyyy-MM-dd", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime parsedDateOfBirth))
                        {
                            return new ReponseModel
                            {
                                StatusCode = 400,
                                Message = "Invalid Date format. Please use yyyy-MM-dd.",
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

                        updatedDateOfBirth = DateOfBirth;
                    }

                    var updateCustomer = new Update(UserConnection, "JamesCustomer")
                        .Set("JamesFullName", Column.Parameter(updatedFullName))
                        .Set("JamesEmail", Column.Parameter(updatedEmail))
                        .Set("JamesPhone", Column.Parameter(updatedPhone))
                        .Set("JamesPINFL", Column.Parameter(updatedPINFL))
                        .Set("JamesDateOfBirth", Column.Parameter(updatedDateOfBirth))
                        .Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
                        .Where("Id").IsEqual(Column.Parameter(parsedCustomerId)) as Update;

                    updateCustomer.Execute(dbExecutor);

                    var retrieveUpdatedCustomer = new Select(UserConnection)
                        .Column("Id")
                        .Column("JamesFullName")
                        .Column("JamesEmail")
                        .Column("JamesPhone")
                        .Column("JamesPINFL")
                        .Column("JamesDateOfBirth")
                        .From("JamesCustomer")
                        .Where("Id").IsEqual(Column.Parameter(parsedCustomerId)) as Select;

                    CustomerModel updatedCustomer = null;
                    using (var reader = retrieveUpdatedCustomer.ExecuteReader(dbExecutor))
                    {
                        if (reader.Read())
                        {
                            updatedCustomer = new CustomerModel
                            {
                                Id = reader.GetGuid(reader.GetOrdinal("Id")).ToString(),
                                FullName = reader.GetString(reader.GetOrdinal("JamesFullName")),
                                Email = reader.GetString(reader.GetOrdinal("JamesEmail")),
                                Phone = reader.GetString(reader.GetOrdinal("JamesPhone")),
                                PINFL = reader.GetString(reader.GetOrdinal("JamesPINFL")),
                                DateOfBirth = reader.GetDateTime(reader.GetOrdinal("JamesDateOfBirth")).ToString("yyyy-MM-dd")
                            };
                        }
                    }

                    if (updatedCustomer == null)
                    {
                        return new ReponseModel
                        {
                            StatusCode = 404,
                            Message = "Failed to retrieve updated customer.",
                            Data = null
                        };
                    }

                    string jsonData = SerializeToJson(updatedCustomer);

                    return new ReponseModel
                    {
                        StatusCode = 200,
                        Message = "Customer updated successfully.",
                        Data = jsonData
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
        private bool ValidateDateOfBirth(string dateOfBirth)
        {
            DateTime parsedDate;

            bool isValidDate = DateTime.TryParseExact(dateOfBirth, "yyyy-MM-dd",
                CultureInfo.InvariantCulture, DateTimeStyles.None, out parsedDate);

            if (!isValidDate)
            {
                return false;
            }

            DateTime minimumDate = DateTime.Today.AddYears(-18);
            return parsedDate <= minimumDate;
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
