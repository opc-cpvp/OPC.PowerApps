import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase, IComplaintService } from "../../interfaces";

@injectable()
export class OpenReminderDialogCommandHandler implements ICommandHandler<ExtendedXrmPageBase> {
    private _xrmNavigation: Xrm.Navigation;
    private _complaintService: IComplaintService;

    constructor(
        @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation,
        @inject(nameof<IComplaintService>()) complaintService: IComplaintService
    ) {
        this._xrmNavigation = xrmNavigation;
        this._complaintService = complaintService;
    }

    async execute<TForm extends ExtendedXrmPageBase>(formContext: TForm): Promise<void> {
        const parameters: { [key: string]: string } = {};

        if (formContext.data.entity.getEntityName() === "opc_allegation") {
            const complaintId = formContext.getAttribute("opc_complaintid").getValue()[0].id;
            const complaint = await this._complaintService.getComplaint(complaintId);
            const referenceNumber = formContext.getAttribute("opc_referencenumber").getValue();
            if (referenceNumber) {
                parameters.opc_name = referenceNumber;
            }
            parameters.opc_complaintid = formContext.getAttribute("opc_complaintid").getValue()[0].id;
            parameters.opc_complaintidname = complaint.opc_number;
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
