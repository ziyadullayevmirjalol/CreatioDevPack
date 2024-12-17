namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: JamesCardAPISchema

	/// <exclude/>
	public class JamesCardAPISchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public JamesCardAPISchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public JamesCardAPISchema(JamesCardAPISchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("31172d43-8b24-4311-85e4-e6cc421e7cca");
			Name = "JamesCardAPI";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ffe40519-d915-43a8-a6f4-4e408b9194fa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,0,0,69,207,108,233,1,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("31172d43-8b24-4311-85e4-e6cc421e7cca"));
		}

		#endregion

	}

	#endregion

}

