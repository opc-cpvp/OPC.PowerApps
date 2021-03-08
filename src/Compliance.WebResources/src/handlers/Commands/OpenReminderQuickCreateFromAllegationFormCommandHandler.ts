import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase, IComplaintService } from "../../interfaces";

@injectable()
export class OpenReminderQuickCreateFromAllegationFormCommandHandler implements ICommandHandler<ExtendedXrmPageBase> {
    private _xrmNavigation: Xrm.Navigation;
    private _complaintService: IComplaintService;
    private _reminderParameters: { [key: string]: string };

    constructor(
        @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation,
        @inject(nameof<IComplaintService>()) complaintService: IComplaintService
    ) {
        this._xrmNavigation = xrmNavigation;
        this._complaintService = complaintService;
        this._reminderParameters = {};
    }

    async execute<TForm extends ExtendedXrmPageBase>(formContext: TForm): Promise<void> {
        const complaintId = formContext.getAttribute("opc_complaintid").getValue()[0].id;
        const complaint = await this._complaintService.getComplaint(complaintId);

        // Set the related entity lookup field
        this._reminderParameters.opc_complaintid = complaintId;
        this._reminderParameters.opc_complaintidname = complaint.opc_number;

        const referenceNumber = formContext.getAttribute("opc_referencenumber").getValue();
        if (referenceNumber) {
            this._reminderParameters.opc_name = referenceNumber;
        }

        const entityFormOptions = {
            entityName: "opc_reminder",
            useQuickCreateForm: true
        };

        try {
            this._xrmNavigation.openForm(entityFormOptions, this._reminderParameters).then(() => {});
        } catch (err) {
            console.error(err);
        }
    }
}
