import Interfaces = require("./interfaces");
import IFormFactory = Interfaces.IFormFactory;
import { injectable, inject } from "inversify";

// Bootstrapper/Composition Root
@injectable()
export class Bootstrapper {
    public static FormFactory: IFormFactory;
    constructor(@inject(nameof<IFormFactory>()) formFactory: IFormFactory) {
        Bootstrapper.FormFactory = formFactory;
    }
}