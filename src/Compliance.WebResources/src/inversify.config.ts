import { Container } from "inversify";
import { Bootstrapper } from "./bootstrapper";
import { FormFactory } from "./factories/FormFactory";
import { ControlFactory } from "./factories/ControlFactory";
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

// Forms
import ComplaintMainForm = require("./forms/ComplaintMainForm");
import Complaint = ComplaintMainForm.Complaint;
import AllegationMainForm = require("./forms/AllegationMainForm");
import Allegation = AllegationMainForm.Allegation;
import ReminderMainForm = require("./forms/ReminderMainForm");
import Reminder = ReminderMainForm.Reminder;
import NotificationMainForm = require("./forms/NotificationMainForm");
import Notification = NotificationMainForm.Notification;
import ContactMainForm = require("./forms/ContactMainForm");
import Contact = ContactMainForm.Contact;
import RiskAssessmentMainForm = require("./forms/RiskAssessmentMainForm");
import RiskAssessment = RiskAssessmentMainForm.RiskAssessment;

// Controls
import { Controls as ChecklistCtrl } from "./controls/Checklist/ChecklistControl";
import { Controls as RiskAssessmentCtrl } from "./controls/RiskAssessment/RiskAssessmentControl";

// Translations
import i18next from 'i18next';
import { i18n } from 'i18next';
import * as resources from './resources.json';

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

// Register Forms
container.bind<i.IPowerForm<Form.opc_complaint.Main.Information>>("opc_complaint_information").to(Complaint.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_allegation.Main.Information>>("opc_allegation_information").to(Allegation.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_reminder.Main.Information>>("opc_reminder_information").to(Reminder.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_notification.Main.Information>>("opc_notification_information").to(Notification.Forms.MainForm);
container.bind<i.IPowerForm<Form.contact.Main.ComplianceContact>>("contact_compliancecontact").to(Contact.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_riskassessment.Main.Information>>("opc_riskassessment_information").to(RiskAssessment.Forms.MainForm);

// Register controls
container.bind<ChecklistCtrl.ChecklistControl>(nameof<ChecklistCtrl.ChecklistControl>()).to(ChecklistCtrl.ChecklistControl);
container.bind<RiskAssessmentCtrl.RiskAssessmentControl>(nameof<RiskAssessmentCtrl.RiskAssessmentControl>()).to(RiskAssessmentCtrl.RiskAssessmentControl);

// Other contexts
container.bind<Xrm.Navigation>(nameof<Xrm.Navigation>()).toConstantValue(Xrm.Navigation);
container.bind<Xrm.Utility>(nameof<Xrm.Utility>()).toConstantValue(Xrm.Utility);
container.bind<Xrm.context>(nameof<Xrm.context>()).toDynamicValue(() => Xrm.Utility.getGlobalContext());
container.bind<Document>(nameof<Document>()).toDynamicValue(() => window.document);

// Language
i18next.init({
    resources: resources.resources,
    defaultNS: "common",
    fallbackLng: "en",
    lng: Xrm.Utility.getGlobalContext().userSettings.languageId == 1033 ? "en" : "fr" // This works because page is reloaded when language is changed.
});
container.bind<i18n>(nameof<i18n>()).toConstantValue(i18next);

// Bootstrapper/Composition Root setup
container.bind<i.IFormFactory>(nameof<i.IFormFactory>()).toConstantValue(new FormFactory(container));
container.bind<i.IControlFactory>(nameof<i.IControlFactory>()).toConstantValue(new ControlFactory(container));
container.resolve<Bootstrapper>(Bootstrapper);
