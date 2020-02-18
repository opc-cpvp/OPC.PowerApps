import { injectable, interfaces } from "inversify";
import "reflect-metadata";
import Interfaces = require("../interfaces");
import IFormFactory = Interfaces.IFormFactory;
import IPowerForm = Interfaces.IPowerForm;

@injectable()
export class FormFactory implements IFormFactory {

    private _container : interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }

    createForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(context: Xrm.ExecutionContext<TForm, any>): IPowerForm<TForm> {
        let fctx = context.getFormContext();
        let form = this._container.get<IPowerForm<TForm>>(fctx.data.entity.getEntityName() +
            "_" +
            fctx.ui.formSelector.getCurrentItem().getLabel().toLowerCase());
        form.initializeComponents(context);
        return form;
    }
}