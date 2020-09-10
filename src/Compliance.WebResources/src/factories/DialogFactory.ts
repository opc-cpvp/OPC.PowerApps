import { injectable, interfaces } from "inversify";
import "reflect-metadata";
import { IPowerDialog, IDialogFactory } from "../interfaces";

@injectable()
export class DialogFactory implements IDialogFactory {
    private _container: interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }

    public createDialog<TDialog extends IPowerDialog>(dialogName: string): TDialog {
        let dialog = this._container.get<TDialog>(dialogName);
        dialog.init();
        return dialog;
    }
}