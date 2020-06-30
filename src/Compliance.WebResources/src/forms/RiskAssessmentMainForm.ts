import { injectable, inject } from "inversify";
import "reflect-metadata";
import { PowerForm } from "../interfaces";

export namespace RiskAssessment.Forms {
    @injectable()
    export class MainForm extends PowerForm<Form.opc_riskassessment.Main.Information> {
        constructor() {
            super();
        }
    }
}