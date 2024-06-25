import "@jxa/global-type";
import {run} from "@jxa/run";

console.log("Calendar access");

(async () => {
    const result = await run(() => {
        const iCal = Application("iCal");
        return iCal.calendars[0].name();
    });
    console.log(result);
})();

