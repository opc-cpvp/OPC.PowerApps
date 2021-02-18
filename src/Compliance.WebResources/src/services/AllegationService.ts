import { injectable } from "inversify";
import "reflect-metadata";
import { IAllegationService, AllegationWithIssues } from ".././interfaces";

@injectable()
export class AllegationService implements IAllegationService {
    public getAllegation(id: string): Promise<opc_allegation_Result> {
        return XrmQuery.retrieve(x => x.opc_allegations, id).promise();
    }
    public updateAllegation(allegationId: string, issueId: string): void {
        XrmQuery.associateCollection(
            x => x.opc_allegations,
            allegationId,
            x => x.opc_issues,
            issueId,
            x => x.opc_allegations_issues_relatedissues
        ).execute(() => {});
    }

    public getAllegationWithIssues(id: string): Promise<AllegationWithIssues> {
        return XrmQuery.retrieve(x => x.opc_allegations, id)
            .expand(
                x => x.opc_allegations_issues_relatedissues,
                x => [x.opc_name, x.opc_accessrequestnumber, x.opc_issueid]
            )
            .promise();
    }
    public getAllegationDispositionFilter(disposition: opc_allegationdisposition): string {
        return (
            '<filter type="and">' +
            '<condition attribute="statecode" operator="eq" value="0" />' +
            `<condition attribute="opc_allegationdisposition" operator="eq" value="${disposition}" />` +
            "</filter>"
        );
    }

    public getAllegationDispositionActionFilter(dispositionReason: string): string {
        return (
            '<filter type="and">' +
            '<condition attribute="statecode" operator="eq" value="0" />' +
            `<condition attribute="opc_dispositionreasonid" operator="eq" value="${dispositionReason}" />` +
            "</filter>"
        );
    }
}
