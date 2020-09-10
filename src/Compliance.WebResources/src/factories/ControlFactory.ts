import { injectable, interfaces } from "inversify";
import "reflect-metadata";
import { IPowerControl } from "../interfaces";

@injectable()
export class ControlFactory {
    private _container: interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }

    public createControl<TControl extends IPowerControl>(controlName: string): TControl {
        let control = this._container.get<TControl>(controlName);
        control.init();
        return control;
    }

}