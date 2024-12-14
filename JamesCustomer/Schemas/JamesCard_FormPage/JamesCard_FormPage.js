define("JamesCard_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true
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
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
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
					"entitySchemaName": "JamesCard"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "a187d0f9-ac7c-465a-b433-93b13154e00b",
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
				"name": "Input_zwt4zbr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_dhk4qey",
					"labelPosition": "auto",
					"control": "$StringAttribute_dhk4qey"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_var3h8j",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_drvsj27",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_drvsj27"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_yb8ug1x",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_nz0zs8j",
					"labelPosition": "auto",
					"control": "$LookupAttribute_nz0zs8j",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_ygqj2mp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_xzxnrnd",
					"labelPosition": "auto",
					"control": "$LookupAttribute_xzxnrnd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_itjz3oj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_itjz3oj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ygqj2mp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_gzoi5rs",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.JamesCustomerJamesPINFL",
					"labelPosition": "auto",
					"control": "$JamesCustomerJamesPINFL",
					"readonly": true,
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
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
					"StringAttribute_dhk4qey": {
						"modelConfig": {
							"path": "PDS.JamesCardNumber"
						},
						"validators": {
							"CardNumberValidator": {
								"type": "usr.CardNumberValidator",
								"params": {
									"message": "#ResourceString(CardNumberValidationMessage)#"
								}
							}
						}
					},
					"DateTimeAttribute_drvsj27": {
						"modelConfig": {
							"path": "PDS.JamesExpiryDate"
						},
						"validators": {
							"ExpiryDateValidator": {
								"type": "usr.ExpiryDateValidator",
								"params": {
									"message": "#ResourceString(ExpiryDateValidationMessage)#"
								}
							}
						}
					},
					"LookupAttribute_xzxnrnd": {
						"modelConfig": {
							"path": "PDS.JamesCustomer"
						}
					},
					"NumberAttribute_ct8gz0e": {
						"modelConfig": {
							"path": "PDS.JamesCardCustomerPINFL"
						}
					},
					"LookupAttribute_5810ani": {
						"modelConfig": {
							"path": "PDS.JamesCardCustomer"
						}
					},
					"JamesCardCustomerJamesPINFL": {
						"modelConfig": {
							"path": "PDS.JamesCardCustomerJamesPINFL"
						}
					},
					"LookupAttribute_nz0zs8j": {
						"modelConfig": {
							"path": "PDS.JamesCardType"
						}
					},
					"NumberAttribute_pxg933h": {
						"modelConfig": {
							"path": "PDS.JamesCustomerPINFL"
						}
					},
					"JamesCustomerJamesPINFL": {
						"modelConfig": {
							"path": "PDS.JamesCustomerJamesPINFL"
						}
					},
					"LookupAttribute_u1i6dl9": {
						"modelConfig": {
							"path": "PDS.James"
						}
					},
					"StringAttribute_bafw42k": {
						"modelConfig": {
							"path": "PDS.JamesColumn5"
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
					"primaryDataSourceName": "PDS"
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
							"entitySchemaName": "JamesCard",
							"attributes": {
								"JamesCustomerJamesPINFL": {
									"path": "JamesCustomer.JamesPINFL",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.CardNumberValidator": {
				validator: function (config) {
					return function (control) {
						let cardNumber = control.value;

						const cardNumberRegex = /^(?:\d{4}-){3}\d{4}$|^\d{16}$/;

						let valueIsCorrect = cardNumberRegex.test(cardNumber);

						let result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.CardNumberValidator": {
									message: "#ResourceString(CardNumberValidationMessage)#",
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
			},
			"usr.ExpiryDateValidator": {
				validator: function (config) {
					return function (control) {
						let expiryDate = control.value;

						let isValidDate = !isNaN(Date.parse(expiryDate));
						let valueIsCorrect = false;

						if (isValidDate) {
							let today = new Date();
							let inputDate = new Date(expiryDate);

							if (inputDate > today) {
								valueIsCorrect = true;
							}
						}

						let result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.ExpiryDateValidator": {
									message: "#ResourceString(ExpiryDateValidationMessage)#",
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