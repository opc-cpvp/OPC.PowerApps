export class WindowHelper {
    static openWindow(url: string, target: string, width: number, height: number): Window {

        const dualScreenLeft = window.screenLeft || window.screenX;
        const dualScreenTop = window.screenTop || window.screenY;

        const clientWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
        const clientHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;

        const systemZoom = clientWidth / window.screen.availWidth;
        const left = (clientWidth - width) / 2 / systemZoom + dualScreenLeft;
        const top = (clientHeight - height) / 2 / systemZoom + dualScreenTop;

        return window.open(url, target,
            `
            scrollbars = yes,
            status = yes,
            width = ${width / systemZoom},
            height = ${height / systemZoom},
            top = ${top},
            left = ${left}
            `
        );
    }
}