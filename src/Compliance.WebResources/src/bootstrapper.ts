import Interfaces = require("./interfaces");
import IFormFactory = Interfaces.IFormFactory;
import { injectable, inject } from "inversify";
import { IControlFactory } from "./interfaces";

// Bootstrapper/Composition Root
@injectable()
export class Bootstrapper {
    public static FormFactory: IFormFactory;
    public static ControlFactory: IControlFactory;

    constructor(@inject(nameof<IFormFactory>()) formFactory: IFormFactory, @inject(nameof<IControlFactory>()) controlFactory: IControlFactory) {
        Bootstrapper.FormFactory = formFactory;
        Bootstrapper.ControlFactory = controlFactory;
    }
}