import "reflect-metadata";

export namespace Controls {

    export class RiskAssessmentControl {
        constructor() {
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public static control_OnLoad(): void {
            let parent : any = window.parent;
            let serverUrl  = parent.Xrm.Utility.getGlobalContext().getClientUrl();
            
            let message : any = {};
            message.value = "test";
            
            window.parent.postMessage(JSON.stringify(message), serverUrl);
        }
    }
}