using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Core.DB;
using Terrasoft.Core;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration
{
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
    }

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

                Select selectCustomers = new Select(UserConnection)
                    .Column("Id")
                    .Column("JamesFullName")
                    .Column("JamesEmail")
                    .Column("JamesPINFL")
                    .From("JamesCustomer") as Select;

                using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection())
                {
                    using (IDataReader reader = selectCustomers.ExecuteReader(dbExecutor))
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

                // Explicitly serialize to JSON-friendly object
                var serializedData = SerializeToJson(customers);
                var jsonData = DeserializeFromJson<List<CustomerModel>>(serializedData);

                return new ReponseModel
                {
                    StatusCode = 200,
                    Message = "Success",
                    Data = jsonData // JSON-friendly format
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

        private string SerializeToJson(object obj)
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

        private T DeserializeFromJson<T>(string json)
        {
            using (var memoryStream = new MemoryStream(System.Text.Encoding.UTF8.GetBytes(json)))
            {
                var serializer = new DataContractJsonSerializer(typeof(T));
                return (T)serializer.ReadObject(memoryStream);
            }
        }
    }
}
