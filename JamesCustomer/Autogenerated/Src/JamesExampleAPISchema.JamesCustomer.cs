namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: JamesExampleAPISchema

	/// <exclude/>
	public class JamesExampleAPISchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public JamesExampleAPISchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public JamesExampleAPISchema(JamesExampleAPISchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("67bee2b8-3913-4744-9159-bf7e3a7fa1d3");
			Name = "JamesExampleAPI";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ffe40519-d915-43a8-a6f4-4e408b9194fa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,81,209,78,194,48,20,125,102,95,81,247,4,201,178,15,144,248,0,138,4,13,46,97,36,60,16,31,186,237,138,141,93,91,123,239,136,147,240,239,118,108,14,134,138,125,235,57,231,158,158,123,90,160,80,27,22,151,72,144,135,49,216,173,72,97,174,51,144,67,175,248,139,10,87,144,92,162,71,41,137,45,39,161,213,183,106,9,214,114,212,47,20,222,106,11,225,221,248,39,225,60,29,153,231,199,161,218,250,236,161,74,22,3,162,51,143,137,19,156,209,179,232,12,152,74,157,112,41,62,47,196,249,13,173,115,120,138,231,128,134,167,208,33,213,139,216,20,246,224,232,237,60,230,206,186,217,223,113,100,121,74,207,53,58,66,243,4,228,220,140,19,39,66,10,42,23,240,94,8,11,57,40,194,254,233,165,170,142,221,176,127,70,42,85,216,0,217,160,126,198,20,137,20,41,75,37,71,100,147,15,158,27,9,236,154,141,57,66,19,43,96,179,5,240,44,82,178,60,237,238,48,189,243,122,189,117,100,160,222,167,187,192,97,9,215,248,76,109,245,27,244,231,64,175,58,115,33,253,233,100,233,7,108,172,179,50,166,82,86,185,157,106,238,172,249,6,90,52,92,89,110,12,100,65,235,85,157,42,60,32,221,107,155,115,234,12,214,80,248,128,90,5,78,134,70,43,132,203,186,193,49,103,211,2,146,173,254,114,10,212,52,209,31,180,146,93,39,136,5,42,172,98,126,244,120,229,15,91,102,239,245,246,222,254,11,79,2,155,115,22,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("67bee2b8-3913-4744-9159-bf7e3a7fa1d3"));
		}

		#endregion

	}

	#endregion

}

