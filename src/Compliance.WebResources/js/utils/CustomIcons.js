export class CustomIcons {
    static displayNotificationIcon(rowData, userLCID) {
        var str = JSON.parse(rowData);
        var coldata = str.statuscode_Value;
        var imgName = "";
        var tooltip = "";

        switch (parseInt(coldata, 10)) {
            case 1:  //Unread = 1
                imgName = "opc_icon64x64_unread_notification.png";
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
                imgName = "opc_icon64x64_read_notification.png";
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

        var resultarray = [imgName, tooltip];
        return resultarray;
        //try {
        //    switch (parseInt(coldata, 10)) {
        //        case 1:  //Unread = 1
        //            imgName = "opc_icon64x64_unread_notification.png";
        //            switch (userLCID) {
        //                case 1036:
        //                    tooltip = "Notification non lue";
        //                    break;
        //                default:
        //                    tooltip = "Unread notification";
        //                    break;
        //            }
        //            break;
        //        case 924340000:  //Read = 924,340,000
        //            imgName = "opc_icon64x64_read_notification.png";
        //            switch (userLCID) {
        //                case 1036:
        //                    tooltip = "Notification lue";
        //                    break;
        //                default:
        //                    tooltip = "Read notification";
        //                    break;
        //            }
        //            break;
        //        default:
        //            break;
        //    }
        //} catch (error) {

        //} finally {
        //    var resultarray = [imgName, tooltip];
        //    return resultarray;
        //}
    }
}