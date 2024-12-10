define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "TimelineTile_Email"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Task"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Call"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_SysFile"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Feed"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_OmniChat"
			},
			{
				"operation": "insert",
				"name": "TimelineTile_tbedhut",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Author",
					"sortedByColumn": "SendDate",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_m92xrek",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Author",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_5qd3gdy",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"schemaName": "Call",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_tj739oe",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "af1f685c-315b-4b44-a957-c5094417a57a",
						"schemaName": "OmniChat",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Name",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_vrw0wxy",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "8b33b6b2-19f7-4222-9161-b4054b3fbb09",
						"schemaName": "Document",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_iuw76hk",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "897be3e4-0333-467d-88e2-b7a945c0d810",
						"schemaName": "Contract",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimelineTile_z0mhzar",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "80294582-06b5-4faa-a85f-3323e5536b71",
						"schemaName": "Order",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_u80o3pa",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "bfb313dd-bb55-4e1b-8e42-3d346e0da7c5",
						"schemaName": "Invoice",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TimelineTile_qrz5is8",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "SysFile",
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TimelineTile_v76mf07",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "Feed",
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "TimelineTile_phwqpku",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "8b33b6b2-19f7-4222-9161-b4054b3fbb09",
						"schemaName": "Document",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "TimelineTile_se9i9rj",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "80294582-06b5-4faa-a85f-3323e5536b71",
						"schemaName": "Order",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "TimelineTile_68vf5jy",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "bfb313dd-bb55-4e1b-8e42-3d346e0da7c5",
						"schemaName": "Invoice",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "TimelineTile_scuzw43",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Author",
					"sortedByColumn": "SendDate",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "TimelineTile_ci1irex",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Author",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "TimelineTile_3fsb3tx",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"schemaName": "Call",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "TimelineTile_vt5bt2u",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "897be3e4-0333-467d-88e2-b7a945c0d810",
						"schemaName": "Contract",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "TimelineTile_559yb6k",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "af1f685c-315b-4b44-a957-c5094417a57a",
						"schemaName": "OmniChat",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Name",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "insert",
				"name": "TimelineTile_0sitwj9",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"data": {
						"schemaType": "SysFile",
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 18
			},
			{
				"operation": "insert",
				"name": "TimelineTile_c2ngg5o",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"data": {
						"schemaType": "Feed",
						"isDefault": true
					},
					"isDefault": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 19
			},
			{
				"operation": "insert",
				"name": "TabContainer_8v18t68",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_8v18t68_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_pe4xtdi",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_8v18t68",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_rc58qym",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rc58qym_title)#",
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
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 17
					},
					"visible": true
				},
				"parentName": "GridContainer_pe4xtdi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jn9r73f",
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
				"parentName": "ExpansionPanel_rc58qym",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rsy0cjg",
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
				"parentName": "GridContainer_jn9r73f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_5y09fq5",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_rc58qym",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_6obh1xw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 14
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_6obh1xw",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_6obh1xwDS_Id",
					"columns": [
						{
							"id": "cbc7b6cb-553b-b7a2-07bf-18afd7483f2d",
							"code": "DataGrid_6obh1xwDS_JamesName",
							"caption": "#ResourceString(DataGrid_6obh1xwDS_JamesName)#",
							"dataValueType": 28,
							"width": 145
						},
						{
							"id": "8f15c603-6259-a244-8b18-e5e647ce5ae3",
							"code": "DataGrid_6obh1xwDS_JamesCategory",
							"path": "JamesCategory",
							"caption": "#ResourceString(DataGrid_6obh1xwDS_JamesCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesRequestCategory"
						},
						{
							"id": "c852b85c-b85c-c1f7-0bc5-abfcb311b4b7",
							"code": "DataGrid_6obh1xwDS_JamesSubCategory",
							"path": "JamesSubCategory",
							"caption": "#ResourceString(DataGrid_6obh1xwDS_JamesSubCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesSubCategory"
						},
						{
							"id": "59426a29-a98b-3361-6d85-8105ae919a60",
							"code": "DataGrid_6obh1xwDS_JamesStatus",
							"path": "JamesStatus",
							"caption": "#ResourceString(DataGrid_6obh1xwDS_JamesStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesRequestStatus",
							"width": 131
						},
						{
							"id": "3d34ae09-d94d-a21d-0575-177c6552f435",
							"code": "DataGrid_6obh1xwDS_JamesApplicant",
							"path": "JamesApplicant",
							"caption": "#ResourceString(DataGrid_6obh1xwDS_JamesApplicant)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					]
				},
				"parentName": "GridContainer_5y09fq5",
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
					"DataGrid_6obh1xw": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_6obh1xwDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "JamesName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_6obh1xwDS_JamesName": {
									"modelConfig": {
										"path": "DataGrid_6obh1xwDS.JamesName"
									}
								},
								"DataGrid_6obh1xwDS_JamesCategory": {
									"modelConfig": {
										"path": "DataGrid_6obh1xwDS.JamesCategory"
									}
								},
								"DataGrid_6obh1xwDS_JamesSubCategory": {
									"modelConfig": {
										"path": "DataGrid_6obh1xwDS.JamesSubCategory"
									}
								},
								"DataGrid_6obh1xwDS_JamesStatus": {
									"modelConfig": {
										"path": "DataGrid_6obh1xwDS.JamesStatus"
									}
								},
								"DataGrid_6obh1xwDS_JamesApplicant": {
									"modelConfig": {
										"path": "DataGrid_6obh1xwDS.JamesApplicant"
									}
								},
								"DataGrid_6obh1xwDS_Id": {
									"modelConfig": {
										"path": "DataGrid_6obh1xwDS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_6obh1xwDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "JamesRequestManagement",
							"attributes": {
								"JamesName": {
									"path": "JamesName"
								},
								"JamesCategory": {
									"path": "JamesCategory"
								},
								"JamesSubCategory": {
									"path": "JamesSubCategory"
								},
								"JamesStatus": {
									"path": "JamesStatus"
								},
								"JamesApplicant": {
									"path": "JamesApplicant"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_6obh1xwDS": [
						{
							"attributePath": "JamesApplicant",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});