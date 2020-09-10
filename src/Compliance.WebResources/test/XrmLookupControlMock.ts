﻿import { XrmAttributeMock } from "./XrmAttributeMock";

/* Members were copied instead of inheriting directly from Xrm.LookupControl because of the strict reference to LookupAttribute */
export interface XrmLookupControlMock extends Xrm.Control<XrmAttributeMock> /* , Xrm.LookupControl<string>*/ {
    addCustomView(
        viewId: string,
        entityName: string,
        viewDisplayName: string,
        fetchXml: string,
        layoutXml: string,
        isDefault: boolean
    ): void;
    getDefaultView(): string;
    setDefaultView(guid: string): void;
    addCustomFilter(fetchXml: string, entityType?: string): void;
    addPreSearch(handler: Function): void;
    removePreSearch(handler: Function): void;
    setEntityTypes(entityTypes: string[]): void;
    getEntityTypes(): string[];
}
