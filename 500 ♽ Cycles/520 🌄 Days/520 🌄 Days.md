---
alias:
- 🌄 Days
tags:
- dashboard
---

# 🌄 Days

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon:dv.luxon,
    that:this,
    buttonName:"🌄 New Day",
    folder:"500 ♽ Cycles/520 🌄 Days",
    nameFormat:"yyyy-MM-dd",
    split:true
})
```

## Last 7 Days

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let days = dv.pages("#day");
let oneWeek = dv.luxon.Duration.fromISO('P2W');
let currentDay = dv.luxon.DateTime.now().toFormat("yyyy-MM-dd");
let oneWeekAgo = dv.luxon.DateTime.now().minus(oneWeek).toFormat("yyyy-MM-dd");
let activeDays = days
    .where(p => p.file.name >= oneWeekAgo && p.file.name <= currentDay)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Day", "Sleep Time", "Awake Time", "Total Sleep", "Improvements", "Weight"],
    activeDays.map(p => [
        p.file.link,
        p["sleep-start-time"],
        p["awake-time"],
        p["total-sleep"],
        p["improvements"],
        p["weight"]
    ])
);
```
