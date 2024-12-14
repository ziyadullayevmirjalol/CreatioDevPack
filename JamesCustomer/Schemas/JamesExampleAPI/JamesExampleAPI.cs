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
    public class Example : BaseService, IReadOnlySessionState
    {
		[OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
	}
}