/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/context.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/dg.xrmquery.web.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/metadata.d.ts" />
/// <reference path="../@types/xrmextensions/xrmextensions.d.ts" />

import "../js/lib/xrmquery/dg.xrmquery.web.promise.min.js";
import "reflect-metadata";
import "./inversify.config";

// Composition Root
export { Bootstrapper } from "./bootstrapper";
export { Utilities } from "./utils/NotificationIcons/NotificationIcons";

// TODO: Temporary, move to factory with IoC container
export { TemplateDialogPage } from "./dialogs/Templates/TemplateDialogPage";
export { TemplateDialog } from "./dialogs/Templates/TemplateDialog";