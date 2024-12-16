using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;
using Terrasoft.Core;
using System.Data;
using System.Text.Json;

namespace Terrasoft.Configuration
{

    public class ReponseModel
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }
    public class CustomerModel
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PINFL { get; set; }
    }

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class CustomerAPI : BaseService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public HttpResponseMessage GetAllCustomers()
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
                    };
                }

                return new ReponseModel
                {
                    StatusCode = 200,
                    Message = "Success",
                    Data = JsonSerializer.Serialize(customers),
                };
            }
            catch (Exception ex)
            {
                return new ReponseModel
                {
                    StatusCode = 404,
                    Message = ex.Message,
                };
            }
        }
    }
}
