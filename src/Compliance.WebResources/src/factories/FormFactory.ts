import { injectable, interfaces } from "inversify";
import "reflect-metadata";
import Interfaces = require("../interfaces");
import IFormFactory = Interfaces.IFormFactory;
import IPowerForm = Interfaces.IPowerForm;

@injectable()
export class FormFactory implements IFormFactory {
    private _container: interfaces.Container;

    constructor(container: interfaces.Container) {
        this._container = container;
    }

    createForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(
        context: Xrm.ExecutionContext<TForm, any>
    ): IPowerForm<TForm> {
        const fctx = context.getFormContext();
        const pageType = context.getContext().getQueryStringParameters()["pageType"];
        let formName: string;

        switch (pageType) {
            case "quickcreate":
                formName = pageType;
                break;
            case "entityrecord":
                // For whatever reason formSelector is not available with quickcreates
                formName = fctx.ui.formSelector.getCurrentItem().getLabel().toLowerCase();
                break;
        }

        const form = this._container.get<IPowerForm<TForm>>(fctx.data.entity.getEntityName() + "_" + formName);
        form.initializeComponents(context);
        return form;
    }
}
