using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;
using System;
using System.Web.SessionState;
using System.IO;
using System.Globalization;
using Terrasoft.Core;
using Terrasoft.Common;

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

                if (customers.Count == 0)
                {
                    string errorMessage = "There are no customers yet!";
                    var response1 = new HttpResponseMessage(HttpStatusCode.BadRequest);
                    response.Headers.Add("X-Error-Message", errorMessage);
                    return response;
                }

                var customersReponse = new HttpResponseMessage(HttpStatusCode.OK);
                customersReponse.Content = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(customers));
                return customersReponse;
            }
            catch (Exception ex)
            {
                var response = new HttpResponseMessage(HttpStatusCode.InternalServerError);
                string error = ex.Message;
                response.Headers.Add("X-Error-Message", error);
                return response;
            }
        }
    }
}