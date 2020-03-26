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


// Forms
import ComplaintMainForm = require("./forms/ComplaintMainForm");
import Complaint = ComplaintMainForm.Complaint;
import AllegationMainForm = require("./forms/AllegationMainForm");
import Allegation = AllegationMainForm.Allegation;
import ReminderMainForm = require("./forms/ReminderMainForm");
import Reminder = ReminderMainForm.Reminder;
import NotificationMainForm = require("./forms/NotificationMainForm");
import Notification = NotificationMainForm.Notification;

// Controls
import { Controls } from "./controls/Checklist/ChecklistControl";

const container = new Container();

// Register Services
container.bind<i.IComplaintService>(nameof<i.IComplaintService>()).to(ComplaintService);
container.bind<i.IAllegationService>(nameof<i.IAllegationService>()).to(AllegationService);
container.bind<i.IReminderService>(nameof<i.IReminderService>()).to(ReminderService);
container.bind<i.INotificationService>(nameof<i.INotificationService>()).to(NotificationService);
container.bind<i.IChecklistService>(nameof<i.IChecklistService>()).to(ChecklistService);

// Register Forms
container.bind<i.IPowerForm<Form.opc_complaint.Main.Information>>("opc_complaint_information").to(Complaint.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_allegation.Main.Information>>("opc_allegation_information").to(Allegation.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_reminder.Main.Information>>("opc_reminder_information").to(Reminder.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_notification.Main.Information>>("opc_notification_information").to(Notification.Forms.MainForm);

// Register controls
container.bind<Xrm.context>(nameof<Xrm.context>()).toDynamicValue(() => Xrm.Utility.getGlobalContext());
container.bind<Document>(nameof<Document>()).toDynamicValue(() => window.document);
container.bind<Controls.ChecklistControl>(nameof<Controls.ChecklistControl>()).to(Controls.ChecklistControl);

// Bootstrapper/Composition Root setup
container.bind<i.IFormFactory>(nameof<i.IFormFactory>()).toConstantValue(new FormFactory(container));
container.bind<i.IControlFactory>(nameof<i.IControlFactory>()).toConstantValue(new ControlFactory(container));
container.resolve<Bootstrapper>(Bootstrapper);