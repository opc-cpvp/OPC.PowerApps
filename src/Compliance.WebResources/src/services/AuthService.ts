import { injectable } from "inversify";
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
            .catch(async error => {
                console.log(error);
                await msalInstance
                    .acquireTokenPopup(tokenRequest)
                    .then(response => {
                        accessToken = response.accessToken;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });

        return accessToken;
    }
}
