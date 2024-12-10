define("JamesRequestManagement_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"color": "transparent",
					"visible": true,
					"borderRadius": "none",
					"gap": "small"
				}
			},
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"color": "accent",
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"color": "transparent",
					"visible": true,
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "small",
						"left": "small"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_JamesName",
							"caption": "#ResourceString(PDS_JamesName)#",
							"dataValueType": 1,
							"width": 148.00001525878906
						},
						{
							"id": "703f626d-c980-0c0c-5c7e-5b8e174ba4cd",
							"code": "PDS_JamesStatus",
							"path": "JamesStatus",
							"caption": "#ResourceString(PDS_JamesStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesRequestStatus",
							"width": 162.00001525878906
						},
						{
							"id": "50cccb0a-336b-b6da-3ebf-fe447bb84e81",
							"code": "PDS_JamesCategory",
							"path": "JamesCategory",
							"caption": "#ResourceString(PDS_JamesCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesRequestCategory",
							"width": 173.9965362548828
						},
						{
							"id": "0c41d23a-33f8-9237-18ad-e09074d91076",
							"code": "PDS_JamesSubCategory",
							"path": "JamesSubCategory",
							"caption": "#ResourceString(PDS_JamesSubCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesSubCategory",
							"width": 155.9965362548828
						},
						{
							"id": "7a997d3e-0e4f-162b-aa3f-ed1df675fdf6",
							"code": "PDS_JamesOwner",
							"path": "JamesOwner",
							"caption": "#ResourceString(PDS_JamesOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 173.00001525878906
						},
						{
							"id": "3a6f7fe9-9ec3-8d64-c4e5-4a079826ecb7",
							"code": "PDS_JamesApplicant",
							"path": "JamesApplicant",
							"caption": "#ResourceString(PDS_JamesApplicant)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 179
						},
						{
							"id": "52f8b7d7-9cbd-692a-ddf0-8f958284bc2b",
							"code": "PDS_CreatedBy",
							"path": "CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 174
						},
						{
							"id": "fb7e4526-2ba8-7499-b6ee-3a0a4f0db0a1",
							"code": "PDS_JamesApplicantType",
							"path": "JamesApplicant.Type",
							"caption": "#ResourceString(PDS_JamesApplicantType)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContactType",
							"width": 161.98959350585938
						},
						{
							"id": "c5f67032-f994-056f-e408-bd19f690d093",
							"code": "PDS_JamesExpenseTotal",
							"path": "JamesExpenseTotal",
							"caption": "#ResourceString(PDS_JamesExpenseTotal)#",
							"dataValueType": 6
						},
						{
							"id": "671e5a52-3f83-5871-eeda-a3adaec88b72",
							"caption": "#ResourceString(PDS_JamesExpensesJamesRequestIdCount671e5a52)#",
							"code": "PDS_JamesExpensesJamesRequestIdCount671e5a52",
							"path": "[JamesExpenses:JamesRequest].Id",
							"referenceSchemaName": "JamesExpenses",
							"width": 176.00001525878906
						},
						{
							"id": "97f8d9a7-32af-f63e-4c9c-7763eb895825",
							"code": "PDS_JamesExpensesJamesRequestJamesAmountSum2f685d57",
							"path": "[JamesExpenses:JamesRequest].JamesAmount",
							"caption": "#ResourceString(PDS_JamesExpensesJamesRequestJamesAmountSum2f685d57)#",
							"dataValueType": 6,
							"referenceSchemaName": "JamesExpenses",
							"width": 137.00000762939453
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
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
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "remove",
				"name": "DataTable",
				"properties": [
					"selectionState",
					"_selectionOptions"
				]
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					],
					"iconOnly": false
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_ry0ew0v",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ry0ew0v_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "reload-button-icon",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LookupQuickFilterByTag",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema"
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Tag_Virtual_Column"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_4uphj58",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_4uphj58_config_caption)#",
						"hint": "",
						"icon": "person-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_4uphj58_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "JamesApplicant"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_4uphj58_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_jw3iqh0",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_jw3iqh0_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_jw3iqh0_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_jw3iqh0_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_n5o9als",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_n5o9als_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_n5o9als_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"fa2eebde-cfc0-441d-a117-bcb1a9ac3c4e": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "JamesStatus"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "JamesRequestStatus",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Approval",
																				"Id": "9d81903c-6ca7-4358-aa73-95a616102e9e",
																				"value": "9d81903c-6ca7-4358-aa73-95a616102e9e",
																				"displayValue": "Approval"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Denied",
																				"Id": "72f10ed3-9239-406a-9724-39459af17d20",
																				"value": "72f10ed3-9239-406a-9724-39459af17d20",
																				"displayValue": "Denied"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "In process",
																				"Id": "d466d511-c400-481a-8f64-ee1109b95315",
																				"value": "d466d511-c400-481a-8f64-ee1109b95315",
																				"displayValue": "In process"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "New",
																				"Id": "f111cda4-c519-4782-aec6-106e713ac093",
																				"value": "f111cda4-c519-4782-aec6-106e713ac093",
																				"displayValue": "New"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "JamesRequestManagement"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_n5o9als_caption)#",
													"defaultValue": false,
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_n5o9als_Value"
						]
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "JamesRequestManagement",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": []
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					},
					"borderRadius": "medium"
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_es9yooz",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_rfys4ky",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "transparent",
					"borderRadius": "none",
					"visible": true
				},
				"parentName": "FlexContainer_es9yooz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_3jdjk71",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_3jdjk71_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_3jdjk71_Data",
								"schemaName": "JamesRequestManagement",
								"filters": {
									"filter": {
										"items": {
											"acfadb8b-9101-482b-bdc0-27824ed0e20f": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "JamesStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "JamesRequestStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Approval",
																"Id": "9d81903c-6ca7-4358-aa73-95a616102e9e",
																"value": "9d81903c-6ca7-4358-aa73-95a616102e9e",
																"displayValue": "Approval"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Denied",
																"Id": "72f10ed3-9239-406a-9724-39459af17d20",
																"value": "72f10ed3-9239-406a-9724-39459af17d20",
																"displayValue": "Denied"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "In process",
																"Id": "d466d511-c400-481a-8f64-ee1109b95315",
																"value": "d466d511-c400-481a-8f64-ee1109b95315",
																"displayValue": "In process"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "New",
																"Id": "f111cda4-c519-4782-aec6-106e713ac093",
																"value": "f111cda4-c519-4782-aec6-106e713ac093",
																"displayValue": "New"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "JamesRequestManagement"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "JamesRequestManagement",
							"attributes": {
								"JamesName": {
									"path": "JamesName"
								},
								"JamesStatus": {
									"path": "JamesStatus"
								},
								"JamesCategory": {
									"path": "JamesCategory"
								},
								"JamesSubCategory": {
									"path": "JamesSubCategory"
								},
								"JamesOwner": {
									"path": "JamesOwner"
								},
								"JamesApplicant": {
									"path": "JamesApplicant"
								},
								"JamesApplicantType": {
									"type": "ForwardReference",
									"path": "JamesApplicant.Type"
								},
								"JamesExpenseTotal": {
									"path": "JamesExpenseTotal"
								},
								"JamesExpensesJamesRequestIdCount671e5a52": {
									"type": "Aggregation",
									"path": "[JamesExpenses:JamesRequest].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count",
										"filter": null
									}
								},
								"JamesExpensesJamesRequestJamesAmountSum2f685d57": {
									"type": "Aggregation",
									"path": "[JamesExpenses:JamesRequest].JamesAmount",
									"aggregationConfig": {
										"aggregationFunction": "Sum",
										"filter": null
									}
								}
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_3jdjk71_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "light-blue"
						},
						"theme": "full-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"layoutConfig": {
						"height": 238.17361450195312
					},
					"visible": true
				},
				"parentName": "FlexContainer_es9yooz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GaugeWidget_1dr432f",
				"values": {
					"type": "crt.GaugeWidget",
					"config": {
						"title": "#ResourceString(GaugeWidget_1dr432f_title)#",
						"data": {
							"providing": {
								"attribute": "GaugeWidget_1dr432f_Data",
								"schemaName": "JamesRequestManagement",
								"filters": {
									"filter": {
										"items": {
											"fcb354bf-221d-43de-909e-2aa489d2ea63": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "JamesStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "JamesRequestStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Completed",
																"Id": "ee584bb0-0ec8-47b6-8534-5592357efe79",
																"value": "ee584bb0-0ec8-47b6-8534-5592357efe79",
																"displayValue": "Completed"
															}
														}
													}
												]
											},
											"7dcbb3d5-8965-4388-950a-6f9df8c1b8c6": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "JamesApplicant"
												},
												"isAggregative": false,
												"dataValueType": 0,
												"referenceSchemaName": "Contact",
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 2
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "JamesRequestManagement"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "JamesRequestManagement",
							"attributes": {
								"JamesName": {
									"path": "JamesName"
								},
								"JamesStatus": {
									"path": "JamesStatus"
								},
								"JamesCategory": {
									"path": "JamesCategory"
								},
								"JamesSubCategory": {
									"path": "JamesSubCategory"
								},
								"JamesOwner": {
									"path": "JamesOwner"
								},
								"JamesApplicant": {
									"path": "JamesApplicant"
								},
								"JamesApplicantType": {
									"type": "ForwardReference",
									"path": "JamesApplicant.Type"
								},
								"JamesExpenseTotal": {
									"path": "JamesExpenseTotal"
								},
								"JamesExpensesJamesRequestIdCount671e5a52": {
									"type": "Aggregation",
									"path": "[JamesExpenses:JamesRequest].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count",
										"filter": null
									}
								},
								"JamesExpensesJamesRequestJamesAmountSum2f685d57": {
									"type": "Aggregation",
									"path": "[JamesExpenses:JamesRequest].JamesAmount",
									"aggregationConfig": {
										"aggregationFunction": "Sum",
										"filter": null
									}
								}
							}
						},
						"text": {
							"template": "#ResourceString(GaugeWidget_1dr432f_template)#",
							"metricMacros": "{0}"
						},
						"layout": {
							"color": "light-blue"
						},
						"theme": "full-fill",
						"thresholds": {
							"0": {
								"color": "#ff3e13"
							},
							"2": {
								"color": "#ffac07"
							},
							"8": {
								"color": "#00c853"
							},
							"10": {
								"color": "#00c853"
							}
						},
						"min": 0,
						"max": 10,
						"orderDirection": 1
					},
					"sectionBindingColumnRecordId": "$Id",
					"layoutConfig": {
						"height": 241.77499389648438
					},
					"visible": true
				},
				"parentName": "FlexContainer_es9yooz",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					},
					"FolderTree_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_items_DS.FilterData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "FolderTree"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
					"FolderTree_active_folder_filter": {
						"value": {}
					},
					"FolderTree_items_DS_filter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "EntitySchemaName"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "JamesRequestManagement"
										}
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "asc",
									"columnName": "CreatedBy"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "LookupQuickFilterByTag_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_4uphj58_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_jw3iqh0_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_n5o9als_Items",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_JamesName": {
						"modelConfig": {
							"path": "PDS.JamesName"
						}
					},
					"PDS_JamesStatus": {
						"modelConfig": {
							"path": "PDS.JamesStatus"
						}
					},
					"PDS_JamesCategory": {
						"modelConfig": {
							"path": "PDS.JamesCategory"
						}
					},
					"PDS_JamesSubCategory": {
						"modelConfig": {
							"path": "PDS.JamesSubCategory"
						}
					},
					"PDS_JamesOwner": {
						"modelConfig": {
							"path": "PDS.JamesOwner"
						}
					},
					"PDS_JamesApplicant": {
						"modelConfig": {
							"path": "PDS.JamesApplicant"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_JamesApplicantType": {
						"modelConfig": {
							"path": "PDS.JamesApplicantType"
						}
					},
					"PDS_JamesExpenseTotal": {
						"modelConfig": {
							"path": "PDS.JamesExpenseTotal"
						}
					},
					"PDS_JamesExpensesJamesRequestIdCount671e5a52": {
						"modelConfig": {
							"path": "PDS.JamesExpensesJamesRequestIdCount671e5a52"
						}
					},
					"PDS_JamesExpensesJamesRequestJamesAmountSum2f685d57": {
						"modelConfig": {
							"path": "PDS.JamesExpensesJamesRequestJamesAmountSum2f685d57"
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
							"config": {
								"entitySchemaName": "JamesRequestManagement",
								"attributes": {
									"JamesName": {
										"path": "JamesName"
									},
									"JamesStatus": {
										"path": "JamesStatus"
									},
									"JamesCategory": {
										"path": "JamesCategory"
									},
									"JamesSubCategory": {
										"path": "JamesSubCategory"
									},
									"JamesOwner": {
										"path": "JamesOwner"
									},
									"JamesApplicant": {
										"path": "JamesApplicant"
									},
									"CreatedBy": {
										"path": "CreatedBy"
									},
									"JamesApplicantType": {
										"type": "ForwardReference",
										"path": "JamesApplicant.Type"
									},
									"JamesExpenseTotal": {
										"path": "JamesExpenseTotal"
									},
									"JamesExpensesJamesRequestIdCount671e5a52": {
										"type": "Aggregation",
										"path": "[JamesExpenses:JamesRequest].Id",
										"aggregationConfig": {
											"aggregationFunction": "Count",
											"filter": null
										}
									},
									"JamesExpensesJamesRequestJamesAmountSum2f685d57": {
										"type": "Aggregation",
										"path": "[JamesExpenses:JamesRequest].JamesAmount",
										"aggregationConfig": {
											"aggregationFunction": "Sum",
											"filter": null
										}
									}
								}
							},
							"scope": "viewElement"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});