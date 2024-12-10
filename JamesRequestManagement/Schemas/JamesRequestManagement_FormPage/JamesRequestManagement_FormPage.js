define("JamesRequestManagement_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "partiallyColored",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "crt-color-light-green",
					"headerBackgroundColor": "crt-color-blue",
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
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
					"entitySchemaName": "JamesRequestManagement"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "551f0313-9cb4-4a30-8911-5acc5f23260b",
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
				"name": "Button_abvhvx7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_abvhvx7_caption)#",
					"color": "accent",
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_7jbhwtd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_7jbhwtd_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_9bk6our",
							"filters": "$GridDetail_9bk6our | crt.ToCollectionFilters : 'GridDetail_9bk6our' : $GridDetail_9bk6our_SelectionState"
						}
					},
					"clickMode": "default",
					"icon": "import-data-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_l4bu3ck",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": true,
					"entityName": "JamesRequestManagement",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "JamesName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.JamesName",
					"control": "$JamesName",
					"labelPosition": "auto",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_88gz4jr",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_rbpngua",
					"labelPosition": "auto",
					"control": "$LookupAttribute_rbpngua",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ControlAction_wuy70s9",
				"values": {
					"code": "goToRecordList",
					"type": "crt.ComboboxAction",
					"icon": "combobox-go-to-source",
					"caption": "ComboBox.IsGoToSourceAllowedTooltip",
					"clicked": {
						"request": "crt.OpenLookupSourceRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_88gz4jr",
				"propertyName": "controlActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_mq2fgly",
				"values": {
					"for": "TabPanel_nyh44gb",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_ffh8bv0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_i069h30",
					"labelPosition": "auto",
					"control": "$LookupAttribute_i069h30",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ControlAction_kcxz4m1",
				"values": {
					"code": "goToRecordList",
					"type": "crt.ComboboxAction",
					"icon": "combobox-go-to-source",
					"caption": "ComboBox.IsGoToSourceAllowedTooltip",
					"clicked": {
						"request": "crt.OpenLookupSourceRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ffh8bv0",
				"propertyName": "controlActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_4h8htel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_scrnvkl",
					"labelPosition": "auto",
					"control": "$NumberAttribute_scrnvkl",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Approval_je8qnum",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "JamesRequestManagement",
					"approvalEntityName": "SysApproval",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TabPanel_nyh44gb",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_va6m3kv",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_va6m3kv_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "employee-tab-icon"
				},
				"parentName": "TabPanel_nyh44gb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nhbbgxo",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_va6m3kv",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_icffddh",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_icffddh_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#1F4A71",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_nhbbgxo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_eziwzov",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_va6m3kv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_31jrssj",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_rbpngua"
				},
				"parentName": "FlexContainer_eziwzov",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_t07ink5",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.JamesApplicantEmail",
					"control": "$JamesApplicantEmail",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_t07ink5_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "FlexContainer_eziwzov",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_wxedz2d",
				"values": {
					"type": "crt.PhoneInput",
					"label": "#ResourceString(Input_wxedz2d_label)#",
					"control": "$JamesApplicantPhone",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "FlexContainer_eziwzov",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_qc1ojj2",
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
					"color": "#CBE8FA",
					"borderRadius": "medium",
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_54f7qgv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_8gnx5c1",
					"labelPosition": "auto",
					"control": "$LookupAttribute_8gnx5c1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "GridContainer_qc1ojj2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_dkctqxe",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_cbc1vph",
					"labelPosition": "auto",
					"control": "$LookupAttribute_cbc1vph",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qc1ojj2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_etwpaqj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_apsfzax",
					"labelPosition": "auto",
					"control": "$LookupAttribute_apsfzax",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_qc1ojj2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_poaxln9",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_0y95x5l",
					"labelPosition": "above",
					"control": "$StringAttribute_0y95x5l",
					"multiline": false,
					"visible": true,
					"placeholder": "#ResourceString(Input_poaxln9_placeholder)#",
					"tooltip": "#ResourceString(Input_poaxln9_tooltip)#"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_zx5udy8",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_s9l4p9k",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_s9l4p9k_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainer_zx5udy8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_kxrrenu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_hnizai9",
					"labelPosition": "above",
					"control": "$LookupAttribute_hnizai9",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_zx5udy8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_xe5ebk4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xe5ebk4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_kxrrenu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_zb6un5z",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_12hbpxm",
					"labelPosition": "above",
					"control": "$StringAttribute_12hbpxm",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_zx5udy8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button_ks8einx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ks8einx_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "JamesProcess_dd3f67f",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RequestID"
						}
					},
					"clickMode": "default",
					"icon": "horn-button-icon"
				},
				"parentName": "GridContainer_zx5udy8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ds1mfef",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ds1mfef_title)#",
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
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_dln7bif",
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
				"parentName": "ExpansionPanel_ds1mfef",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_kxqg0m5",
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
				"parentName": "GridContainer_dln7bif",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_8hnuab7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_8hnuab7_caption)#",
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
							"dataSourceName": "ApprovalList_93l8qk5DS"
						}
					}
				},
				"parentName": "FlexContainer_kxqg0m5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SearchFilter_xpjc5xq",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_xpjc5xq_placeholder)#",
					"targetAttributes": [
						"ApprovalList_93l8qk5"
					]
				},
				"parentName": "FlexContainer_kxqg0m5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_q147o9s",
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
				"parentName": "ExpansionPanel_ds1mfef",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalList_93l8qk5",
				"values": {
					"type": "crt.ApprovalList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"features": {
						"editable": false
					},
					"entityName": "JamesRequestManagement",
					"approvalEntityName": "SysApproval",
					"items": "$ApprovalList_93l8qk5",
					"primaryColumnName": "ApprovalList_93l8qk5DS_Id",
					"columns": [
						{
							"id": "fd0da578-ed78-0b64-7ea7-af09c96aaf3a",
							"code": "ApprovalList_93l8qk5DS_VisaOwner",
							"caption": "#ResourceString(ApprovalList_93l8qk5DS_VisaOwner)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "7c1acbfe-afd5-d488-e2e0-4405751e89ff",
							"code": "ApprovalList_93l8qk5DS_Objective",
							"caption": "#ResourceString(ApprovalList_93l8qk5DS_Objective)#",
							"dataValueType": 30,
							"width": 175
						},
						{
							"id": "0c28148e-7fe9-41db-4cd7-b2566ecf2d7a",
							"code": "ApprovalList_93l8qk5DS_CreatedOn",
							"caption": "#ResourceString(ApprovalList_93l8qk5DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "9c53eaf5-8eea-5c67-f9b1-cc6546b17127",
							"code": "ApprovalList_93l8qk5DS_SetDate",
							"caption": "#ResourceString(ApprovalList_93l8qk5DS_SetDate)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "ce788b95-64f4-15b9-d1ea-d44791143649",
							"code": "ApprovalList_93l8qk5DS_SetBy",
							"caption": "#ResourceString(ApprovalList_93l8qk5DS_SetBy)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "1efaaef6-4b71-9dae-608c-4b42d8ca1411",
							"code": "ApprovalList_93l8qk5DS_Status",
							"caption": "#ResourceString(ApprovalList_93l8qk5DS_Status)#",
							"dataValueType": 10,
							"width": 175
						}
					],
					"visible": true
				},
				"parentName": "GridContainer_q147o9s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_dowm6cj",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_dowm6cj_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_5af8dew",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_5af8dew_title)#",
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
					"fitContent": true
				},
				"parentName": "TabContainer_dowm6cj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_k3zw4s0",
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
				"parentName": "ExpansionPanel_5af8dew",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_npvajli",
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
				"parentName": "GridContainer_k3zw4s0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_7uhe6mp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_7uhe6mp_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "small",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "JamesExpenses",
							"defaultValues": [
								{
									"attributeName": "JamesRequest",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default",
					"menuItems": []
				},
				"parentName": "FlexContainer_npvajli",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_aw9yi6n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_aw9yi6n_caption)#",
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
							"dataSourceName": "GridDetail_9bk6ourDS"
						}
					}
				},
				"parentName": "FlexContainer_npvajli",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_j6uuyft",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_j6uuyft_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_npvajli",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_pb28x06",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_pb28x06_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_9bk6our"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j6uuyft",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7voektd",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7voektd_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "JamesExpenses"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_j6uuyft",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4f0j064",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4f0j064_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_9bk6our"
					]
				},
				"parentName": "FlexContainer_npvajli",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7p6jl1x",
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
				"parentName": "ExpansionPanel_5af8dew",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_9bk6our",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 21
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
					"items": "$GridDetail_9bk6our",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_9bk6ourDS_Id",
					"columns": [
						{
							"id": "872c67e5-ee7c-f58c-d67d-83f501d171c0",
							"code": "GridDetail_9bk6ourDS_JamesAmount",
							"path": "JamesAmount",
							"caption": "#ResourceString(GridDetail_9bk6ourDS_JamesAmount)#",
							"dataValueType": 6,
							"width": 177
						},
						{
							"id": "b8fa98fa-3e50-1723-d66e-ea6e816614b4",
							"code": "GridDetail_9bk6ourDS_JamesType",
							"path": "JamesType",
							"caption": "#ResourceString(GridDetail_9bk6ourDS_JamesType)#",
							"dataValueType": 10,
							"referenceSchemaName": "JamesRequestExpenseType",
							"width": 176
						},
						{
							"id": "3991251b-a7e0-8113-eb98-417230256279",
							"code": "GridDetail_9bk6ourDS_JamesComment",
							"caption": "#ResourceString(GridDetail_9bk6ourDS_JamesComment)#",
							"dataValueType": 28
						},
						{
							"id": "ba28c5ea-ac92-1fb5-07fa-0efba06b08a7",
							"code": "GridDetail_9bk6ourDS_JamesImported",
							"path": "JamesImported",
							"caption": "#ResourceString(GridDetail_9bk6ourDS_JamesImported)#",
							"dataValueType": 12
						}
					],
					"selectionState": "$GridDetail_9bk6our_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_9bk6our_SelectionState"
					}
				},
				"parentName": "GridContainer_7p6jl1x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_m5vr4gn",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_m5vr4gn_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "diagram-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5nzycj5",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_m5vr4gn",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_4slnwak",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_4slnwak_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_5nzycj5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddNextStepBtn_ezov8k1",
				"values": {
					"type": "crt.Button",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					},
					"layoutConfig": {}
				},
				"parentName": "FlexContainer_5nzycj5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextSteps_y53rxkc",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"masterSchemaName": "JamesRequestManagement"
				},
				"parentName": "TabContainer_m5vr4gn",
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
					"StringAttribute_0y95x5l": {
						"modelConfig": {
							"path": "PDS.JamesDescription"
						}
					},
					"LookupAttribute_rbpngua": {
						"modelConfig": {
							"path": "PDS.JamesApplicant"
						}
					},
					"LookupAttribute_i069h30": {
						"modelConfig": {
							"path": "PDS.JamesOwner"
						}
					},
					"LookupAttribute_8gnx5c1": {
						"modelConfig": {
							"path": "PDS.JamesStatus"
						}
					},
					"LookupAttribute_cbc1vph": {
						"modelConfig": {
							"path": "PDS.JamesCategory"
						}
					},
					"LookupAttribute_apsfzax": {
						"modelConfig": {
							"path": "PDS.JamesSubCategory"
						}
					},
					"NumberAttribute_scrnvkl": {
						"modelConfig": {
							"path": "PDS.JamesExpenseTotal"
						}
					},
					"JamesApplicantEmail": {
						"modelConfig": {
							"path": "PDS.JamesApplicantEmail"
						}
					},
					"JamesApplicantAddress": {
						"modelConfig": {
							"path": "PDS.JamesApplicantAddress"
						}
					},
					"JamesApplicantPhone": {
						"modelConfig": {
							"path": "PDS.JamesApplicantPhone"
						}
					},
					"GridDetail_9bk6our": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_9bk6ourDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "JamesImported"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_9bk6ourDS_JamesAmount": {
									"modelConfig": {
										"path": "GridDetail_9bk6ourDS.JamesAmount"
									}
								},
								"GridDetail_9bk6ourDS_JamesType": {
									"modelConfig": {
										"path": "GridDetail_9bk6ourDS.JamesType"
									}
								},
								"GridDetail_9bk6ourDS_JamesComment": {
									"modelConfig": {
										"path": "GridDetail_9bk6ourDS.JamesComment"
									}
								},
								"GridDetail_9bk6ourDS_JamesImported": {
									"modelConfig": {
										"path": "GridDetail_9bk6ourDS.JamesImported"
									}
								},
								"GridDetail_9bk6ourDS_Id": {
									"modelConfig": {
										"path": "GridDetail_9bk6ourDS.Id"
									}
								}
							}
						}
					},
					"ApprovalList_qeesg15": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_qeesg15DS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_qeesg15DS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_qeesg15DS.VisaOwner"
									}
								},
								"ApprovalList_qeesg15DS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_qeesg15DS.Objective"
									}
								},
								"ApprovalList_qeesg15DS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_qeesg15DS.CreatedOn"
									}
								},
								"ApprovalList_qeesg15DS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_qeesg15DS.SetDate"
									}
								},
								"ApprovalList_qeesg15DS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_qeesg15DS.SetBy"
									}
								},
								"ApprovalList_qeesg15DS_Status": {
									"modelConfig": {
										"path": "ApprovalList_qeesg15DS.Status"
									}
								},
								"ApprovalList_qeesg15DS_Id": {
									"modelConfig": {
										"path": "ApprovalList_qeesg15DS.Id"
									}
								}
							}
						}
					},
					"ApprovalList_93l8qk5": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_93l8qk5DS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_93l8qk5DS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_93l8qk5DS.VisaOwner"
									}
								},
								"ApprovalList_93l8qk5DS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_93l8qk5DS.Objective"
									}
								},
								"ApprovalList_93l8qk5DS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_93l8qk5DS.CreatedOn"
									}
								},
								"ApprovalList_93l8qk5DS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_93l8qk5DS.SetDate"
									}
								},
								"ApprovalList_93l8qk5DS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_93l8qk5DS.SetBy"
									}
								},
								"ApprovalList_93l8qk5DS_Status": {
									"modelConfig": {
										"path": "ApprovalList_93l8qk5DS.Status"
									}
								},
								"ApprovalList_93l8qk5DS_Id": {
									"modelConfig": {
										"path": "ApprovalList_93l8qk5DS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_hnizai9": {
						"modelConfig": {
							"path": "PDS.JamesColumn9"
						}
					},
					"StringAttribute_12hbpxm": {
						"modelConfig": {
							"path": "PDS.JamesComment"
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
						"GridDetail_9bk6ourDS": [
							{
								"attributePath": "JamesRequest",
								"relationPath": "PDS.Id"
							}
						],
						"ApprovalList_93l8qk5DS": [
							{
								"attributePath": "EntityId",
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
							"entitySchemaName": "JamesRequestManagement",
							"attributes": {
								"JamesApplicantEmail": {
									"path": "JamesApplicant.Email",
									"type": "ForwardReference"
								},
								"JamesApplicantPhone": {
									"path": "JamesApplicant.Phone",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_9bk6ourDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "JamesExpenses",
							"attributes": {
								"JamesAmount": {
									"path": "JamesAmount"
								},
								"JamesType": {
									"path": "JamesType"
								},
								"JamesComment": {
									"path": "JamesComment"
								},
								"JamesImported": {
									"path": "JamesImported"
								}
							}
						}
					},
					"ApprovalList_qeesg15DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval",
							"attributes": {
								"VisaOwner": {
									"path": "VisaOwner"
								},
								"Objective": {
									"path": "Objective"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"SetDate": {
									"path": "SetDate"
								},
								"SetBy": {
									"path": "SetBy"
								},
								"Status": {
									"path": "Status"
								}
							}
						}
					},
					"ApprovalList_93l8qk5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval",
							"attributes": {
								"VisaOwner": {
									"path": "VisaOwner"
								},
								"Objective": {
									"path": "Objective"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"SetDate": {
									"path": "SetDate"
								},
								"SetBy": {
									"path": "SetBy"
								},
								"Status": {
									"path": "Status"
								}
							}
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