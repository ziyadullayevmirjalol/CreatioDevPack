using System;
using System.IO;
using System.Collections.Generic;
using System.Data;
using System.Net;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;
using Terrasoft.Core;

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
        public Stream GetAllCustomers()
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
                                Id = reader.GetColumnValue<Guid>("Id").ToString(),
                                FullName = reader.GetColumnValue<string>("JamesFullName"),
                                Email = reader.GetColumnValue<string>("JamesEmail"),
                                PINFL = reader.GetColumnValue<string>("JamesPINFL")
                            });
                        }
                    }
                }

                if (customers.Count == 0)
                {
                    WebOperationContext.Current.OutgoingResponse.StatusCode = HttpStatusCode.BadRequest;
                    WebOperationContext.Current.OutgoingResponse.ContentType = "application/json";
                    WebOperationContext.Current.OutgoingResponse.Headers.Add("X-Error-Message", "No data available");
                    return new MemoryStream(System.Text.Encoding.UTF8.GetBytes("{\"error\":\"There are no customers yet!\"}"));
                }

                WebOperationContext.Current.OutgoingResponse.StatusCode = HttpStatusCode.OK;
                WebOperationContext.Current.OutgoingResponse.ContentType = "application/json";
                return new MemoryStream(System.Text.Encoding.UTF8.GetBytes(Newtonsoft.Json.JsonConvert.SerializeObject(customers)));
            }
            catch (Exception ex)
            {
                WebOperationContext.Current.OutgoingResponse.StatusCode = HttpStatusCode.InternalServerError;
                WebOperationContext.Current.OutgoingResponse.ContentType = "application/json";
                WebOperationContext.Current.OutgoingResponse.Headers.Add("X-Error-Message", ex.Message);
                return new MemoryStream(System.Text.Encoding.UTF8.GetBytes($"{{\"error\":\"An error occurred: {ex.Message}\"}}"));
            }
        }
    }
}
