import { Container } from "inversify";
import { Bootstrapper } from "./bootstrapper";
import { FormFactory } from "./factories/FormFactory";
import { ControlFactory } from "./factories/ControlFactory";
import { DialogFactory } from "./factories/DialogFactory";
import * as i from "./interfaces";

// Services
import { ComplaintService } from "./services/ComplaintService";
import { AllegationService } from "./services/AllegationService";
import { ReminderService } from "./services/ReminderService";
import { NotificationService } from "./services/NotificationService";
import { ChecklistService } from "./services/ChecklistService";
import { ContactService } from "./services/ContactService";
import { UserService } from "./services/UserService";
import { RiskAssessmentService } from "./services/RiskAssessmentService";
import { EnvironmentVariableService } from "./services/EnvironmentVariableService";
import { AuthService } from "./services/AuthService";
import { SharePointService } from "./services/SharePointService";
import { TemplateService } from "./services/TemplateService";

// Forms
import ComplaintMainForm = require("./forms/ComplaintMainForm");
import Complaint = ComplaintMainForm.Complaint;
import AllegationMainForm = require("./forms/AllegationMainForm");
import Allegation = AllegationMainForm.Allegation;
import AllegationQuickCreateForm = require("./forms/AllegationQuickCreateForm");
import AllegationQuickCreate = AllegationQuickCreateForm.Allegation;
import IssueMainForm = require("./forms/IssueMainForm");
import Issue = IssueMainForm.Issue;
import IssueQuickCreateForm = require("./forms/IssueQuickCreateForm");
import IssueQuickCreate = IssueQuickCreateForm.Issue;
import ReminderMainForm = require("./forms/ReminderMainForm");
import Reminder = ReminderMainForm.Reminder;
import ReminderQuickCreateForm = require("./forms/ReminderQuickCreateForm");
import ReminderQuickCreate = ReminderQuickCreateForm.Reminder;
import NotificationMainForm = require("./forms/NotificationMainForm");
import Notification = NotificationMainForm.Notification;
import ContactMainForm = require("./forms/ContactMainForm");
import Contact = ContactMainForm.Contact;
import RiskAssessmentMainForm = require("./forms/RiskAssessmentMainForm");
import RiskAssessment = RiskAssessmentMainForm.RiskAssessment;

// Controls
import { Controls as ChecklistCtrl } from "./controls/Checklist/ChecklistControl";
import { Controls as RiskAssessmentCtrl } from "./controls/RiskAssessment/RiskAssessmentControl";

// Dialogs
import { Dialogs as TemplateDialog } from "./dialogs/Templates/TemplateDialog";

// Translations
import i18next from "i18next";
import { i18n } from "i18next";
import * as resources from "./resources.json";

// Command handlers
import { OpenTemplateDialogCommandHandler } from "./handlers/Commands/OpenTemplateDialogCommandHandler";
import { MergeContactCommandHandler } from "./handlers/Commands/MergeContactCommandHandler";
import { CheckDuplicatesQueryHandler } from "./handlers/Queries/CheckDuplicatesQueryHandler";

// Command dispatchers
import { CommandDispatcher } from "./factories/CommandDispatcher";
import { QueryDispatcher } from "./factories/QueryDispatcher";

const container = new Container();

// Register Services
container.bind<i.IComplaintService>(nameof<i.IComplaintService>()).to(ComplaintService);
container.bind<i.IAllegationService>(nameof<i.IAllegationService>()).to(AllegationService);
container.bind<i.IReminderService>(nameof<i.IReminderService>()).to(ReminderService);
container.bind<i.INotificationService>(nameof<i.INotificationService>()).to(NotificationService);
container.bind<i.IChecklistService>(nameof<i.IChecklistService>()).to(ChecklistService);
container.bind<i.IRiskAssessmentService>(nameof<i.IRiskAssessmentService>()).to(RiskAssessmentService);
container.bind<i.IContactService>(nameof<i.IContactService>()).to(ContactService);
container.bind<i.IUserService>(nameof<i.IUserService>()).to(UserService);
container.bind<i.IEnvironmentVariableService>(nameof<i.IEnvironmentVariableService>()).to(EnvironmentVariableService);
container.bind<i.IAuthService>(nameof<i.IAuthService>()).to(AuthService);
container.bind<i.ISharePointService>(nameof<i.ISharePointService>()).to(SharePointService);
container.bind<i.ITemplateService>(nameof<i.ITemplateService>()).to(TemplateService);

// Register Forms
container.bind<i.IPowerForm<Form.opc_complaint.Main.Information>>("opc_complaint_information").to(Complaint.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_allegation.Main.Information>>("opc_allegation_information").to(Allegation.Forms.MainForm);
container
    .bind<i.IPowerForm<Form.opc_allegation.QuickCreate.QuickCreate>>("opc_allegation_quickcreate")
    .to(AllegationQuickCreate.Forms.QuickCreate);
container.bind<i.IPowerForm<Form.opc_reminder.Main.Information>>("opc_reminder_information").to(Reminder.Forms.MainForm);
container
    .bind<i.IPowerForm<Form.opc_reminder.QuickCreate.QuickCreate>>("opc_reminder_quickcreate")
    .to(ReminderQuickCreate.Forms.QuickCreate);
container.bind<i.IPowerForm<Form.opc_notification.Main.Information>>("opc_notification_information").to(Notification.Forms.MainForm);
container.bind<i.IPowerForm<Form.contact.Main.ComplianceContact>>("contact_compliancecontact").to(Contact.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_riskassessment.Main.Information>>("opc_riskassessment_information").to(RiskAssessment.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_issue.Main.Information>>("opc_issue_information").to(Issue.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_issue.QuickCreate.QuickCreate>>("opc_issue_quickcreate").to(IssueQuickCreate.Forms.QuickCreate);

// Register controls
container.bind<ChecklistCtrl.ChecklistControl>(nameof<ChecklistCtrl.ChecklistControl>()).to(ChecklistCtrl.ChecklistControl);
container
    .bind<RiskAssessmentCtrl.RiskAssessmentControl>(nameof<RiskAssessmentCtrl.RiskAssessmentControl>())
    .to(RiskAssessmentCtrl.RiskAssessmentControl);

// Register dialogs
container.bind<TemplateDialog.TemplateDialog>(nameof<TemplateDialog.TemplateDialog>()).to(TemplateDialog.TemplateDialog);

// Other contexts
container.bind<Xrm.Navigation>(nameof<Xrm.Navigation>()).toConstantValue(Xrm.Navigation);
container.bind<Xrm.Utility>(nameof<Xrm.Utility>()).toConstantValue(Xrm.Utility);
container.bind<Xrm.context>(nameof<Xrm.context>()).toDynamicValue(() => Xrm.Utility.getGlobalContext());
container.bind<Document>(nameof<Document>()).toDynamicValue(() => window.document);
container.bind<Window>(nameof<Window>()).toDynamicValue(() => window);

// Commands and queries
container.bind<i.ICommandHandler>(nameof<OpenTemplateDialogCommandHandler>()).to(OpenTemplateDialogCommandHandler);
container.bind<i.ICommandHandler>(nameof<MergeContactCommandHandler>()).to(MergeContactCommandHandler);
container.bind<i.IQueryHandler<boolean>>(nameof<CheckDuplicatesQueryHandler>()).to(CheckDuplicatesQueryHandler);

// Language
i18next
    .init({
        resources: resources.resources,
        defaultNS: "common",
        fallbackLng: "en",
        lng: Xrm.Utility.getGlobalContext().userSettings.languageId === 1033 ? "en" : "fr" // This works because page is reloaded when language is changed.
    })
    .catch(error => {
        console.error(error);
    });
container.bind<i18n>(nameof<i18n>()).toConstantValue(i18next);

// Bootstrapper/Composition Root setup
container.bind<i.IFormFactory>(nameof<i.IFormFactory>()).toConstantValue(new FormFactory(container));
container.bind<i.IControlFactory>(nameof<i.IControlFactory>()).toConstantValue(new ControlFactory(container));
container.bind<i.IDialogFactory>(nameof<i.IDialogFactory>()).toConstantValue(new DialogFactory(container));
container.bind<i.ICommandDispatcher>(nameof<i.ICommandDispatcher>()).toConstantValue(new CommandDispatcher(container));
container.bind<i.IQueryDispatcher>(nameof<i.IQueryDispatcher>()).toConstantValue(new QueryDispatcher(container));
container.resolve<Bootstrapper>(Bootstrapper);
