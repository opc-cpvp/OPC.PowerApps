import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase } from "../../interfaces";

@injectable()
export class OpenTemplateDialogCommandHandler implements ICommandHandler {
    private _xrmNavigation: Xrm.Navigation;

    constructor(@inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation) {
        this._xrmNavigation = xrmNavigation;
    }

    execute<TForm extends ExtendedXrmPageBase>(formContext: TForm): void {
        const complaintId = formContext.data.entity.getId();
        const documentsSubgrid = formContext.getControl("subgrid_documents");

        documentsSubgrid.setFocus();

        this._xrmNavigation
            .navigateTo(
                { pageType: "webresource", webresourceName: "opc_compliance/template_dialog.html", data: complaintId },
                { target: 2, position: 1, width: { value: 420, unit: "px" }, height: { value: 355, unit: "px" } }
            )
            .then(() => {
                documentsSubgrid.refresh();
            });
    }
}
