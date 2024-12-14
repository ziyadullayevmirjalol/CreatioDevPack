define("JamesCustomer_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "transparent",
					"visible": true,
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "JamesCustomer"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "3c0e1180-3f5d-4b9b-a5b9-2813e6b606b1",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Input_saz5l22",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_buinod1",
					"labelPosition": "auto",
					"control": "$StringAttribute_buinod1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_dlkbrt2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_mcu2qwy",
					"labelPosition": "auto",
					"control": "$StringAttribute_mcu2qwy"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PhoneInput_cd0jam8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.StringAttribute_ghvb7at",
					"labelPosition": "auto",
					"control": "$StringAttribute_ghvb7at"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_996hi1u",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_wbcy5pc",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_wbcy5pc"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_8of5ier",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.NumberAttribute_eihvx2q",
					"labelPosition": "auto",
					"control": "$NumberAttribute_eihvx2q"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_ntx6h5y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_f1ef5pq",
					"labelPosition": "auto",
					"control": "$StringAttribute_f1ef5pq"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_08ebpt5",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_sjywthf",
					"labelPosition": "auto",
					"control": "$StringAttribute_sjywthf"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_lwglggt",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_alf67k5",
					"labelPosition": "auto",
					"control": "$StringAttribute_alf67k5",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_enl4swx",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_9l7xiyl",
					"labelPosition": "auto",
					"control": "$StringAttribute_9l7xiyl"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_6m2c5fm",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_wyf2oe1",
					"labelPosition": "above",
					"control": "$StringAttribute_wyf2oe1",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_oe6dshy",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_oe6dshy_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_7h115ob",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_oe6dshy",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zhvsca9",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_7h115ob",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_75te63u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_75te63u_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "JamesCard"
						}
					}
				},
				"parentName": "FlexContainer_zhvsca9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_p456x9e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_p456x9e_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_68p1vxyDS"
						}
					}
				},
				"parentName": "FlexContainer_zhvsca9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_4sz56t0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_4sz56t0_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_zhvsca9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_7zgeg8w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_7zgeg8w_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_68p1vxy"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4sz56t0",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_gu14qg5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_gu14qg5_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "JamesCard"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4sz56t0",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_uz0361p",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_uz0361p_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_68p1vxy"
					]
				},
				"parentName": "FlexContainer_zhvsca9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_h1yxbqh",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_oe6dshy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_68p1vxy",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_68p1vxy",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_68p1vxyDS_Id",
					"columns": [
						{
							"id": "e6dcd367-2093-17eb-6e41-e1efc735c0e7",
							"code": "GridDetail_68p1vxyDS_JamesCardNumber",
							"caption": "#ResourceString(GridDetail_68p1vxyDS_JamesCardNumber)#",
							"dataValueType": 27,
							"width": 187
						},
						{
							"id": "277a3c1a-0950-dc54-3d0e-1737544d1384",
							"code": "GridDetail_68p1vxyDS_JamesCustomerJamesFullName",
							"path": "JamesCustomer.JamesFullName",
							"caption": "#ResourceString(GridDetail_68p1vxyDS_JamesCustomerJamesFullName)#",
							"dataValueType": 28,
							"width": 237
						},
						{
							"id": "b7122593-de53-46e8-aa52-b87c6e68e6d2",
							"code": "GridDetail_68p1vxyDS_JamesExpiryDate",
							"path": "JamesExpiryDate",
							"caption": "#ResourceString(GridDetail_68p1vxyDS_JamesExpiryDate)#",
							"dataValueType": 8
						},
						{
							"id": "0c699726-f5a8-1100-0b17-41d6d2422718",
							"code": "GridDetail_68p1vxyDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_68p1vxyDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 194
						},
						{
							"id": "1008fcf6-f531-9f27-47e1-77337d4596c5",
							"code": "GridDetail_68p1vxyDS_JamesCardType",
							"path": "JamesCardType",
							"caption": "#ResourceString(GridDetail_68p1vxyDS_JamesCardType)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesCardType"
						}
					],
					"referenceSchema": "JamesCard"
				},
				"parentName": "GridContainer_h1yxbqh",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"JamesName": {
						"modelConfig": {
							"path": "PDS.JamesName"
						}
					},
					"StringAttribute_buinod1": {
						"modelConfig": {
							"path": "PDS.JamesFullName"
						},
						"validators": {
							"FullNameValidator": {
								"type": "usr.FullNameValidator",
								"params": {
									"message": "#ResourceString(CustomerFullNameValidationMessage)#"
								}
							}
						}
					},
					"StringAttribute_mcu2qwy": {
						"modelConfig": {
							"path": "PDS.JamesEmail"
						},
						"validators": {
							"EmailValidator": {
								"type": "usr.EmailValidator",
								"params": {
									"message": "#ResourceString(EmailValidationMessage)#"
								}
							}
						}
					},
					"StringAttribute_ghvb7at": {
						"modelConfig": {
							"path": "PDS.JamesPhone"
						},
						"validators": {
							"PhoneValidator": {
								"type": "usr.PhoneValidator",
								"params": {
									"message": "#ResourceString(PhoneValidationMessage)#"
								}
							}
						}
					},
					"DateTimeAttribute_wbcy5pc": {
						"modelConfig": {
							"path": "PDS.JamesDateOfBirth"
						}
					},
					"StringAttribute_f1ef5pq": {
						"modelConfig": {
							"path": "PDS.JamesAddress"
						}
					},
					"StringAttribute_sjywthf": {
						"modelConfig": {
							"path": "PDS.JamesCity"
						}
					},
					"StringAttribute_alf67k5": {
						"modelConfig": {
							"path": "PDS.JamesCounty"
						}
					},
					"StringAttribute_9l7xiyl": {
						"modelConfig": {
							"path": "PDS.JamesState"
						}
					},
					"StringAttribute_wyf2oe1": {
						"modelConfig": {
							"path": "PDS.JamesNotes"
						}
					},
					"GridDetail_68p1vxy": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_68p1vxyDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "JamesCustomerJamesFullName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_68p1vxyDS_JamesCardNumber": {
									"modelConfig": {
										"path": "GridDetail_68p1vxyDS.JamesCardNumber"
									}
								},
								"GridDetail_68p1vxyDS_JamesCustomerJamesFullName": {
									"modelConfig": {
										"path": "GridDetail_68p1vxyDS.JamesCustomerJamesFullName"
									}
								},
								"GridDetail_68p1vxyDS_JamesExpiryDate": {
									"modelConfig": {
										"path": "GridDetail_68p1vxyDS.JamesExpiryDate"
									}
								},
								"GridDetail_68p1vxyDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_68p1vxyDS.CreatedOn"
									}
								},
								"GridDetail_68p1vxyDS_JamesCardType": {
									"modelConfig": {
										"path": "GridDetail_68p1vxyDS.JamesCardType"
									}
								},
								"GridDetail_68p1vxyDS_Id": {
									"modelConfig": {
										"path": "GridDetail_68p1vxyDS.Id"
									}
								}
							}
						}
					},
					"NumberAttribute_eihvx2q": {
						"modelConfig": {
							"path": "PDS.JamesPINFL"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_68p1vxyDS": [
							{
								"attributePath": "JamesCustomer",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "JamesCustomer"
						},
						"scope": "page"
					},
					"GridDetail_68p1vxyDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "JamesCard",
							"attributes": {
								"JamesCardNumber": {
									"path": "JamesCardNumber"
								},
								"JamesCustomerJamesFullName": {
									"type": "ForwardReference",
									"path": "JamesCustomer.JamesFullName"
								},
								"JamesExpiryDate": {
									"path": "JamesExpiryDate"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"JamesCardType": {
									"path": "JamesCardType"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.FullNameValidator": {
				validator: function (config) {
					return function (control) {
						let fullName = control.value;

						const fullNameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
						let valueIsCorrect = true;

						if (!fullName || !fullNameRegex.test(fullName) || fullName.length < 3) {
							valueIsCorrect = false;
						}

						let result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.FullNameValidator": {
									message: "#ResourceString(CustomerFullNameValidationMessage)#",
								},
							};
						}

						return result;
					};
				},
				params: [
					{
						name: "message"
					}
				],
				async: false
			},
			"usr.EmailValidator": {
				validator: function (config) {
					return function (control) {
						let email = control.value;

						const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

						const isValidEmail = emailRegex.test(email);

						let result;
						if (isValidEmail) {
							result = null;
						} else {
							result = {
								"usr.EmailValidator": {
									message: "#ResourceString(EmailValidationMessage)#",
								},
							};
						}

						return result;
					};
				},
				params: [
					{
						name: "message"
					}
				],
				async: false
			},
			"usr.PhoneValidator": {
				validator: function (config) {
					return function (control) {
						let mobileNumber = control.value;

						const mobileNumberRegex = /^[\d\+\-]{10,15}$/;

						let valueIsCorrect = true;
						if (mobileNumber === null || !mobileNumberRegex.test(mobileNumber)) {
							valueIsCorrect = false;
						}

						let result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.PhoneValidator": {
									message: "#ResourceString(PhoneValidationMessage)#",
								}
							};
						}

						return result;
					};
				},
				params: [
					{
						name: "message"
					}
				],
				async: false
			}

		}/**SCHEMA_VALIDATORS*/
	};
});