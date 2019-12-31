import { Container } from "inversify";
import { Bootstrapper } from "./bootstrapper";
import { FormFactory } from "./factories/FormFactory";
import * as i from "./interfaces";

// Services
import { ComplaintService } from "./services/ComplaintService";
import { AllegationService } from "./services/AllegationService";

// Forms
import ComplaintMainForm = require("./forms/ComplaintMainForm");
import Complaint = ComplaintMainForm.Complaint;
import AllegationMainForm = require("./forms/AllegationMainForm");
import Allegation = AllegationMainForm.Allegation;

const container = new Container();

// Register Services
container.bind<i.IComplaintService>(nameof<i.IComplaintService>()).to(ComplaintService);
container.bind<i.IAllegationService>(nameof<i.IAllegationService>()).to(AllegationService);

// Register Forms
container.bind<i.IPowerForm<Form.opc_complaint.Main.Information>>("opc_complaint_information").to(Complaint.Forms.MainForm);
container.bind<i.IPowerForm<Form.opc_allegation.Main.Information>>("opc_allegation_information").to(Allegation.Forms.MainForm);

// Bootstrapper/Composition Root setup
container.bind<i.IFormFactory>(nameof<i.IFormFactory>()).toConstantValue(new FormFactory(container));
container.resolve<Bootstrapper>(Bootstrapper);