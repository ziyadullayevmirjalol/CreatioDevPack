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

namespace Terrasoft.Configuration
{
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class CustomerAPI : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public HttpResponseMessage GetAllCustomers()
        {
            try
            {
                var customers = new List<object>();

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
                            customers.Add(new
                            {
                                Id = reader.GetColumnValue<Guid>("Id"),
                                FullName = reader.GetColumnValue<string>("JamesFullName"),
                                Email = reader.GetColumnValue<string>("JamesEmail"),
                                PINFL = reader.GetColumnValue<string>("JamesPINFL")
                            });
                        }
                    }
                }

                // If no customers found, return BadRequest response
                if (customers.Count == 0)
                {
                    var noCustomersResponse = new HttpResponseMessage(HttpStatusCode.BadRequest)
                    {
                        Content = new StringContent("There are no customers yet!")
                    };
                    noCustomersResponse.Headers.Add("X-Error-Message", "No data available");
                    return noCustomersResponse;
                }

                // If customers found, return OK response
                var customersResponse = new HttpResponseMessage(HttpStatusCode.OK)
                {
                    Content = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(customers),
                                                System.Text.Encoding.UTF8,
                                                "application/json")
                };
                return customersResponse;
            }
            catch (Exception ex)
            {
                // Return InternalServerError response on exception
                var errorResponse = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent($"An error occurred: {ex.Message}")
                };
                errorResponse.Headers.Add("X-Error-Message", ex.Message);
                return errorResponse;
            }
        }
    }
}
