﻿import { injectable } from "inversify";
import "reflect-metadata";
import * as Msal from "msal";
import { IAuthService } from "../interfaces";

@injectable()
export class AuthService implements IAuthService {
    async getAccessToken(msalConfig: Msal.Configuration, tokenRequest: Msal.AuthenticationParameters): Promise<string> {
        let accessToken: string;
        const msalInstance = new Msal.UserAgentApplication(msalConfig);

        await msalInstance
            .acquireTokenSilent(tokenRequest)
            .then(response => {
                accessToken = response.accessToken;
            })
            .catch(async silentError => {
                console.log(silentError);
                await msalInstance
                    .acquireTokenPopup(tokenRequest)
                    .then(response => {
                        accessToken = response.accessToken;
                    })
                    .catch(popupError => {
                        console.log(popupError);
                    });
            });

        return accessToken;
    }
}
