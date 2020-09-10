﻿import { injectable } from "inversify";
import "reflect-metadata";
import { ISharePointService } from "../interfaces";

@injectable()
export class SharePointService implements ISharePointService {
    async getTemplates(sharePointSiteUrl: string, templatesFolderPath: string, accessToken: string): Promise<any[]> {
        let results: any[];
        const request = new Request(`${sharePointSiteUrl}_api/web/GetFolderByServerRelativeUrl('${templatesFolderPath}')/Files`, {
            method: "GET",
            headers: new Headers({
                "Accept": "application/json; odata=verbose",
                "Authorization": `Bearer ${accessToken}`
            })
        });

        await window
            .fetch(request)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Network response was not ok.");
                }
            })
            .then(data => {
                results = data.d.results;
            })
            .catch(error => {
                console.log(error.message);
            });

        // Change to Custom Type instead of any
        return results;
    }

    // Initially thought of calling this sendDocumentToSharePoint, but at this point the document doesn't even exist. Used the same name as the action in dynamics.
    async generateDocumentFromTemplate(
        accessToken: string,
        caseFolderPath: string,
        templatePath: string,
        xmlData: string,
        documentName: string,
        sharePointSiteUrl: string
    ): Promise<Xrm.WebApiResponse> {
        const request = {
            AccessToken: accessToken,
            CaseFolderPath: caseFolderPath,
            TemplatePath: templatePath,
            XMLData: xmlData,
            DocumentName: documentName,
            SharePointSiteUrl: sharePointSiteUrl,
            getMetadata: () => ({
                operationType: 0,
                operationName: "opc_generatedocumentfromtemplate",
                parameterTypes: {
                    AccessToken: {
                        typeName: "Edm.String",
                        structuralProperty: 1
                    },
                    CaseFolderPath: {
                        typeName: "Edm.String",
                        structuralProperty: 1
                    },
                    TemplatePath: {
                        typeName: "Edm.String",
                        structuralProperty: 1
                    },
                    XMLData: {
                        typeName: "Edm.String",
                        structuralProperty: 1
                    },
                    DocumentName: {
                        typeName: "Edm.String",
                        structuralProperty: 1
                    },
                    SharePointSiteUrl: {
                        typeName: "Edm.String",
                        structuralProperty: 1
                    }
                }
            })
        };

        return Xrm.WebApi.online.execute(request);
    }
}
