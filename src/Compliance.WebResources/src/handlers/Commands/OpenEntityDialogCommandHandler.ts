import { injectable, inject } from "inversify";
import { ICommandHandler } from "../../interfaces";

@injectable()
export class OpenEntityDialogCommandHandler implements ICommandHandler<Xrm.ExecutionContext<any, any>> {
    private _xrmNavigation: Xrm.Navigation;
    private _lock = false;

    constructor(@inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation) {
        this._xrmNavigation = xrmNavigation;
    }

    execute(context: Xrm.ExecutionContext<any, any>): void {
        if (this._lock) {
            return;
        }

        // Since clicking the checkbox in the editable grid triggers the event twice, we need to set a lock in order to prevent it from opening a second dialog
        this._lock = true;

        const formContext = context.getFormContext();
        const entity = formContext.data.entity;

        // Disable the fields to prevent them from being modified prior to opening the form
        entity.attributes.forEach(a => a.controls.forEach(c => c.setDisabled(true)));

        this._xrmNavigation
            .navigateTo(
                { pageType: "entityrecord", entityName: entity.getEntityName(), entityId: entity.getId() },
                {
                    target: Xrm.NavigationOptionsTarget.Dialog,
                    position: Xrm.NavigationOptionsPosition.Center,
                    width: { value: 75, unit: "%" },
                    height: { value: 75, unit: "%" }
                }
            )
            .then(value => {
                void formContext.data.refresh();
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                this._lock = false;
            });
    }
}
