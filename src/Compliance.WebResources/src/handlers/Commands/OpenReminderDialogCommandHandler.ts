import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase } from "../../interfaces";

@injectable()
export class OpenReminderDialogCommandHandler implements ICommandHandler<ExtendedXrmPageBase> {
    private _xrmNavigation: Xrm.Navigation;

    constructor(@inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation) {
        this._xrmNavigation = xrmNavigation;
    }

    execute<TForm extends ExtendedXrmPageBase>(formContext: TForm): void {
        const parameters: { [key: string]: string } = {};
        // TODO fix related record shows `No Name` instead of Complaint Number before Save

        if (formContext.data.entity.getEntityName() === "opc_allegation") {
            const referenceNumber = formContext.getAttribute("opc_referencenumber").getValue();
            if (referenceNumber) {
                parameters.opc_name = referenceNumber;
            }
            parameters.opc_complaintid = formContext.getAttribute("opc_complaintid").getValue()[0].id;
        }

        this._xrmNavigation
            .navigateTo(
                {
                    pageType: "entityrecord",
                    entityName: "opc_reminder",
                    data: parameters
                },
                {
                    target: Xrm.NavigationOptionsTarget.Dialog,
                    position: Xrm.NavigationOptionsPosition.Center,
                    width: { value: 75, unit: "%" },
                    height: { value: 75, unit: "%" }
                }
            )
            .catch(() => {
                // TODO catch error
            });
    }
}
