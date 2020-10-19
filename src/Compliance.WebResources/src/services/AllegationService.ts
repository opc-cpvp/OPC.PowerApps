﻿import { injectable } from "inversify";
import "reflect-metadata";
import { IAllegationService } from ".././interfaces";

@injectable()
export class AllegationService implements IAllegationService {
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
