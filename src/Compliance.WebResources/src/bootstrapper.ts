import Interfaces = require("./interfaces");
import IFormFactory = Interfaces.IFormFactory;
import { injectable, inject } from "inversify";
import { IControlFactory, ICommandDispatcher, IQueryDispatcher, IDialogFactory } from "./interfaces";

// Bootstrapper/Composition Root
@injectable()
export class Bootstrapper {
    public static FormFactory: IFormFactory;
    public static ControlFactory: IControlFactory;
    public static DialogFactory: IDialogFactory;
    public static CommandDispatcher: ICommandDispatcher;
    public static QueryDispatcher: IQueryDispatcher;

    constructor(
        @inject(nameof<IFormFactory>()) formFactory: IFormFactory,
        @inject(nameof<IControlFactory>()) controlFactory: IControlFactory,
        @inject(nameof<IDialogFactory>()) dialogFactory: IDialogFactory,
        @inject(nameof<ICommandDispatcher>()) commandDispatcher: ICommandDispatcher,
        @inject(nameof<IQueryDispatcher>()) queryDispatcher: IQueryDispatcher
    ) {
        Bootstrapper.FormFactory = formFactory;
        Bootstrapper.ControlFactory = controlFactory;
        Bootstrapper.DialogFactory = dialogFactory;
        Bootstrapper.CommandDispatcher = commandDispatcher;
        Bootstrapper.QueryDispatcher = queryDispatcher;
    }
}
