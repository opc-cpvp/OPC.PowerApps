/// <reference path="../typings/sinonextensions/sinonextensions.d.ts" />
/// <reference path="../typings/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../typings/xrmdefinitelytyped/dg.xrmquery.web.d.ts" />

/* Global */
import "mocha";
import "jsdom-global/register";

/* Forms */
import "./forms/AccessRequestDocumentMainForm.test";
import "./forms/AccessRequestDocumentQuickCreateForm.test";
import "./forms/AllegationMainForm.test";
import "./forms/AllegationQuickCreateForm.test";
import "./forms/ComplaintMainForm.test";
import "./forms/ContactMainForm.test";
import "./forms/IssueMainForm.test";
import "./forms/IssueQuickCreateForm.test";
import "./forms/NotificationMainForm.test";
import "./forms/ReminderMainForm.test";
import "./forms/ReminderQuickCreateForm.test";
import "./forms/RiskAssessmentMainForm.test";

/* Controls */
import "./controls/Checklist/ChecklistControl.test";
import "./controls/RiskAssessment/RiskAssessmentControl.test";

/* Command Handlers */
import "./handlers/Commands/MergeContactCommandHandler.test";
import "./handlers/Commands/OpenEntityDialogCommandHandler.test";
import "./handlers/Commands/OpenTemplateDialogCommandHandler.test";
import "./handlers/Commands/OpenReminderQuickCreateFromAllegationFormCommandHandler.test";
import "./handlers/Commands/OpenReminderQuickCreateFromComplaintFormCommandHandler.test";
import "./handlers/Commands/OpenIssueQuickCreateFromAllegationFormCommandHandler.test";
import "./handlers/Commands/OpenIssueQuickCreateFromAllegationGridCommandHandler.test";

/* Query Handlers */
import "./handlers/Queries/CheckDuplicatesQueryHandler.test";
import "./handlers/Queries/HasAcceptableAllegationQueryHandler.test";
import "./handlers/Queries/HasAccessAllegationQueryHandler.test";

/* Dialogs */
import "./dialogs/Templates/TemplateDialog.test";
