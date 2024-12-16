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

                // SQL Query to fetch customer details
                Select selectCustomers = new Select(UserConnection)
                    .Column("Id")
                    .Column("JamesFullName")
                    .Column("JamesEmail")
                    .Column("JamesPINFL")
                    .From("JamesCustomer") as Select;

                // Execute query
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

                // If no customers found, return BadRequest response
                if (customers.Count == 0)
                {
                    var noCustomersResponse = new HttpResponseMessage(HttpStatusCode.BadRequest)
                    {
                        Content = new StringContent("{\"message\":\"There are no customers yet!\"}", System.Text.Encoding.UTF8, "application/json")
                    };
                    noCustomersResponse.Headers.Add("X-Error-Message", "No data available");
                    return noCustomersResponse;
                }

                // If customers found, return OK response with JSON data
                var customersResponse = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(JsonSerializer.Serialize(customers), System.Text.Encoding.UTF8, "application/json")
                };
                return customersResponse;
            }
            catch (Exception ex)
            {
                // Return InternalServerError response on exception
                var errorResponse = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent($"{{\"error\":\"An error occurred: {ex.Message}\"}}", System.Text.Encoding.UTF8, "application/json")
                };
                errorResponse.Headers.Add("X-Error-Message", ex.Message);
                return errorResponse;
            }
        }
    }
}
