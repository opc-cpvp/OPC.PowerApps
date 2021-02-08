import { injectable, inject } from "inversify";
import { IQueryHandler, ExtendedXrmPageBase, IComplaintService } from "../../interfaces";

@injectable()
export class HasAcceptableAllegationQueryHandler implements IQueryHandler<boolean> {
    private readonly _complaintService: IComplaintService;

    constructor(@inject(nameof<IComplaintService>()) complaintService: IComplaintService) {
        this._complaintService = complaintService;
    }

    public async executeAsync<TForm extends ExtendedXrmPageBase>(field: string, context: TForm): Promise<boolean> {
        if (context.data.entity.getEntityName() !== "opc_complaint") {
            return false;
        }

        const complaintId = context.data.entity.getId();

        const complaint = await this._complaintService.getComplaintWithRelationships(complaintId);
        const allegations = complaint.opc_complaint_allegations_complaint;

        return allegations.some(x => x.opc_disposition === opc_allegationdisposition.Acceptable);
    }
}
