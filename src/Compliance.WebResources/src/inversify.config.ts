import { Container } from "inversify";
import { Bootstrapper } from "./bootstrapper";
import { FormFactory } from "./factories/FormFactory";
import { ControlFactory } from "./factories/ControlFactory";
import { DialogFactory } from "./factories/DialogFactory";
import * as i from "./interfaces";

// Services
import { AllegationService } from "./services/AllegationService";
import { AllegationTypeService } from "./services/AllegationTypeService";
import { AuthService } from "./services/AuthService";
import { ChecklistService } from "./services/ChecklistService";
import { ComplaintService } from "./services/ComplaintService";
import { ContactService } from "./services/ContactService";
import { EnvironmentVariableService } from "./services/EnvironmentVariableService";
import { NotificationService } from "./services/NotificationService";
import { ReminderService } from "./services/ReminderService";
import { RiskAssessmentService } from "./services/RiskAssessmentService";
import { SharePointService } from "./services/SharePointService";
import { TemplateService } from "./services/TemplateService";
import { UserService } from "./services/UserService";

// Forms
import AccessRequestDocumentMainForm = require("./forms/AccessRequestDocumentMainForm");
import AccessRequestDocument = AccessRequestDocumentMainForm.AccessRequestDocument;
import AccessRequestDocumentQuickCreateForm = require("./forms/AccessRequestDocumentQuickCreateForm");
import AccessRequestDocumentQuickCreate = AccessRequestDocumentQuickCreateForm.AccessRequestDocument;
import AllegationMainForm = require("./forms/AllegationMainForm");
import Allegation = AllegationMainForm.Allegation;
import AllegationQuickCreateForm = require("./forms/AllegationQuickCreateForm");
import AllegationQuickCreate = AllegationQuickCreateForm.Allegation;
import ComplaintMainForm = require("./forms/ComplaintMainForm");
import Complaint = ComplaintMainForm.Complaint;
import ContactMainForm = require("./forms/ContactMainForm");
import Contact = ContactMainForm.Contact;
import IssueMainForm = require("./forms/IssueMainForm");
import Issue = IssueMainForm.Issue;
import IssueQuickCreateForm = require("./forms/IssueQuickCreateForm");
import IssueQuickCreate = IssueQuickCreateForm.Issue;
import NotificationMainForm = require("./forms/NotificationMainForm");
import Notification = NotificationMainForm.Notification;
import ReminderMainForm = require("./forms/ReminderMainForm");
import Reminder = ReminderMainForm.Reminder;
import ReminderQuickCreateForm = require("./forms/ReminderQuickCreateForm");
import ReminderQuickCreate = ReminderQuickCreateForm.Reminder;
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
import { OpenEntityDialogCommandHandler } from "./handlers/Commands/OpenEntityDialogCommandHandler";
import { OpenTemplateDialogCommandHandler } from "./handlers/Commands/OpenTemplateDialogCommandHandler";
import { MergeContactCommandHandler } from "./handlers/Commands/MergeContactCommandHandler";
import { OpenReminderQuickCreateFromAllegationFormCommandHandler } from "./handlers/Commands/OpenReminderQuickCreateFromAllegationFormCommandHandler";
import { OpenReminderQuickCreateFromComplaintFormCommandHandler } from "./handlers/Commands/OpenReminderQuickCreateFromComplaintFormCommandHandler";
import { OpenIssueQuickCreateFromAllegationFormCommandHandler } from "./handlers/Commands/OpenIssueQuickCreateFromAllegationFormCommandHandler";
import { OpenIssueQuickCreateFromAllegationGridCommandHandler } from "./handlers/Commands/OpenIssueQuickCreateFromAllegationGridCommandHandler";
import { CheckDuplicatesQueryHandler } from "./handlers/Queries/CheckDuplicatesQueryHandler";
import { HasAccessAllegationQueryHandler } from "./handlers/Queries/HasAccessAllegationQueryHandler";
import { HasAcceptableAllegationQueryHandler } from "./handlers/Queries/HasAcceptableAllegationQueryHandler";

// Command dispatchers
import { CommandDispatcher } from "./factories/CommandDispatcher";
import { QueryDispatcher } from "./factories/QueryDispatcher";
import { ExtendedXrmPageBase } from "./interfaces";

const container = new Container();

// Register Services
container.bind<i.IAllegationService>(nameof<i.IAllegationService>()).to(AllegationService);
container.bind<i.IAllegationTypeService>(nameof<i.IAllegationTypeService>()).to(AllegationTypeService);
container.bind<i.IAuthService>(nameof<i.IAuthService>()).to(AuthService);
container.bind<i.IChecklistService>(nameof<i.IChecklistService>()).to(ChecklistService);
container.bind<i.IComplaintService>(nameof<i.IComplaintService>()).to(ComplaintService);
container.bind<i.IContactService>(nameof<i.IContactService>()).to(ContactService);
container.bind<i.IEnvironmentVariableService>(nameof<i.IEnvironmentVariableService>()).to(EnvironmentVariableService);
container.bind<i.INotificationService>(nameof<i.INotificationService>()).to(NotificationService);
container.bind<i.IReminderService>(nameof<i.IReminderService>()).to(ReminderService);
container.bind<i.IRiskAssessmentService>(nameof<i.IRiskAssessmentService>()).to(RiskAssessmentService);
container.bind<i.ISharePointService>(nameof<i.ISharePointService>()).to(SharePointService);
container.bind<i.ITemplateService>(nameof<i.ITemplateService>()).to(TemplateService);
container.bind<i.IUserService>(nameof<i.IUserService>()).to(UserService);

// Register Forms
container.bind<i.IPowerForm<Form.contact.Main.ComplianceContact>>("contact_compliancecontact").to(Contact.Forms.MainForm);
container
    .bind<i.IPowerForm<Form.opc_accessrequestdocument.Main.Information>>("opc_accessrequestdocument_information")
    .to(AccessRequestDocument.Forms.MainForm);
container
    .bind<i.IPowerForm<Form.opc_accessrequestdocument.QuickCreate.QuickCreate>>("opc_accessrequestdocument_quickcreate")
    .to(AccessRequestDocumentQuickCreate.Forms.QuickCreate);
container.bind<i.IPowerForm<Form.opc_allegation.Main.Information>>("opc_allegation_information").to(Allegation.Forms.MainForm);
container
    .bind<i.IPowerForm<Form.opc_allegation.QuickCreate.QuickCreate>>("opc_allegation_quickcreate")
    .to(AllegationQuickCreate.Forms.QuickCreate);
container.bind<i.IPowerForm<Form.opc_complaint.Main.Information>>("opc_complaint_information").to(Complaint.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_issue.Main.Information>>("opc_issue_information").to(Issue.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_issue.QuickCreate.QuickCreate>>("opc_issue_quickcreate").to(IssueQuickCreate.Forms.QuickCreate);
container.bind<i.IPowerForm<Form.opc_notification.Main.Information>>("opc_notification_information").to(Notification.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_reminder.Main.Information>>("opc_reminder_information").to(Reminder.Forms.MainForm);
container
    .bind<i.IPowerForm<Form.opc_reminder.QuickCreate.QuickCreate>>("opc_reminder_quickcreate")
    .to(ReminderQuickCreate.Forms.QuickCreate);
container.bind<i.IPowerForm<Form.opc_riskassessment.Main.Information>>("opc_riskassessment_information").to(RiskAssessment.Forms.MainForm);

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
// OpenEntityDialogCommandHandler requires the SingletonScope in order to restrict it to showing a single instance of the dialog
container
    .bind<i.ICommandHandler<Xrm.ExecutionContext<any, any>>>(nameof<OpenEntityDialogCommandHandler>())
    .to(OpenEntityDialogCommandHandler)
    .inSingletonScope();
container.bind<i.ICommandHandler<ExtendedXrmPageBase>>(nameof<OpenTemplateDialogCommandHandler>()).to(OpenTemplateDialogCommandHandler);
container.bind<i.ICommandHandler<ExtendedXrmPageBase>>(nameof<MergeContactCommandHandler>()).to(MergeContactCommandHandler);
container
    .bind<i.ICommandHandler<ExtendedXrmPageBase>>(nameof(OpenReminderQuickCreateFromAllegationFormCommandHandler))
    .to(OpenReminderQuickCreateFromAllegationFormCommandHandler);
container
    .bind<i.ICommandHandler<ExtendedXrmPageBase>>(nameof(OpenReminderQuickCreateFromComplaintFormCommandHandler))
    .to(OpenReminderQuickCreateFromComplaintFormCommandHandler);
container
    .bind<i.ICommandHandler<ExtendedXrmPageBase>>(nameof(OpenIssueQuickCreateFromAllegationFormCommandHandler))
    .to(OpenIssueQuickCreateFromAllegationFormCommandHandler);
container
    .bind<i.ICommandHandler<ExtendedXrmPageBase>>(nameof(OpenIssueQuickCreateFromAllegationGridCommandHandler))
    .to(OpenIssueQuickCreateFromAllegationGridCommandHandler);
container.bind<i.IQueryHandler<boolean>>(nameof<CheckDuplicatesQueryHandler>()).to(CheckDuplicatesQueryHandler);
container.bind<i.IQueryHandler<boolean>>(nameof<HasAccessAllegationQueryHandler>()).to(HasAccessAllegationQueryHandler);
container.bind<i.IQueryHandler<boolean>>(nameof<HasAcceptableAllegationQueryHandler>()).to(HasAcceptableAllegationQueryHandler);

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
