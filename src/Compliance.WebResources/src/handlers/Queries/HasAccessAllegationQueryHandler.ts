import { injectable, inject } from "inversify";
import { IQueryHandler, ExtendedXrmPageBase, IComplaintService } from "../../interfaces";
import { AllegationType } from "../../enums";

@injectable()
export class HasAccessAllegationQueryHandler implements IQueryHandler<boolean> {
    private readonly _complaintService: IComplaintService;

    constructor(@inject(nameof<IComplaintService>()) complaintService: IComplaintService) {
        this._complaintService = complaintService;
    }

    public async executeAsync<TForm extends ExtendedXrmPageBase>(field: string, context: TForm): Promise<boolean> {
        const complaintId = context.data.entity.getId();

        const complaint = await this._complaintService.getComplaintWithRelationships(complaintId);
        const allegations = complaint.opc_complaint_allegations_complaint;

        return allegations.some(x => x.opc_allegationtypeid_guid === AllegationType.Access);
    }
}
