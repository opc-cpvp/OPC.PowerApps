/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/context.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/dg.xrmquery.web.d.ts" />

/* Global */
import 'mocha';
import 'jsdom-global/register';

/* Forms */
import "./forms/ComplaintMainForm.test";
import "./forms/ContactMainForm.test";
import "./forms/NotificationMainForm.test";
import "./forms/ReminderMainForm.test";
import "./forms/ReminderQuickCreateForm.test";
import "./forms/AllegationMainForm.test";
import "./forms/RiskAssessmentsMainForm.test";

/* Controls */
import "./controls/Checklist/ChecklistControl.test"
import "./controls/RiskAssessment/RiskAssessmentControl.test"

/* Command Handlers */
import "./handlers/Commands/MergeContactCommandHandler.test"

/* Query Handlers */
import "./handlers/Queries/CheckDuplicatesQueryHandler.test"

/* Dialogs */
import "./dialogs/Templates/TemplateDialog.test"
import "./dialogs/Templates/TemplateDialogPage.test"
