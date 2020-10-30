export namespace Utilities {
    export class NotificationIcons {
        static displayNotificationIcons(rowData: string, userLCID: number): string[] {
            const str = JSON.parse(rowData);
            const coldata: string = str.statuscode_Value;
            let imgName = "";
            let tooltip = "";

            switch (parseInt(coldata, 10)) {
                case 1: // Unread = 1
                    imgName = "opc_compliance/imgs/icon64x64_unread_notification.png";
                    switch (userLCID) {
                        case 1036:
                            tooltip = "Notification non lue";
                            break;
                        default:
                            tooltip = "Unread notification";
                            break;
                    }
                    break;
                case 924340000: // Read = 924,340,000
                    imgName = "opc_compliance/imgs/icon64x64_read_notification.png";
                    switch (userLCID) {
                        case 1036:
                            tooltip = "Notification lue";
                            break;
                        default:
                            tooltip = "Read notification";
                            break;
                    }
                    break;
                default:
                    break;
            }

            const resultarray = [imgName, tooltip];
            return resultarray;
        }
    }
}
