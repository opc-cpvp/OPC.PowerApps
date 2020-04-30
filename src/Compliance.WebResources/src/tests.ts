/// <reference path="../@types/xrmdefinitelytyped/xrm.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/context.d.ts" />
/// <reference path="../@types/xrmdefinitelytyped/dg.xrmquery.web.d.ts" />

import 'mocha';
import 'jsdom-global/register';

/* Forms */
import "./forms/ComplaintMainForm.test";
import "./forms/ContactMainForm.test";
import "./forms/NotificationMainForm.test";
import "./forms/ReminderMainForm.test";
import "./forms/AllegationMainForm.test";


/* Controls */
import "./controls/Checklist/ChecklistControl.test"

