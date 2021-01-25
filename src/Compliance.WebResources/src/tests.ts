/// <reference path="../@types/sinonextensions/sinonextensions.d.ts" />

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

/* Query Handlers */
import "./handlers/Queries/CheckDuplicatesQueryHandler.test";

/* Dialogs */
import "./dialogs/Templates/TemplateDialog.test";
