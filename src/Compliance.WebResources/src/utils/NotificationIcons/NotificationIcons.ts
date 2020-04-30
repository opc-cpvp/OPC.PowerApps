export namespace Utilities {
    export class NotificationIcons {
        static displayNotificationIcons(rowData: string, userLCID: number): string[] {
            let str = JSON.parse(rowData);
            let coldata: string = str.statuscode_Value;
            let imgName: string = "";
            let tooltip: string = "";

            switch (parseInt(coldata, 10)) {
                case 1:  //Unread = 1
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
                case 924340000:  //Read = 924,340,000
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

            let resultarray = [imgName, tooltip];
            return resultarray;
        }
    }
}