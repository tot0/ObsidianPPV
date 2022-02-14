---
alias:
- 🗓 Weeks
tags:
- dashboard
---

# 🗓 Weeks

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🗓 New Week",
    folder:"500 ♽ Cycles/530 🗓 Weeks",
    nameFormat:"yyyy'-W'WW",
    split:true
})
```

## Last 4 Weeks

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let weeks = dv.pages("#week");
let fourWeeks = luxon.Duration.fromISO('P3W');
let currentWeek = luxon.DateTime.now().toFormat("yyyy'-W'WW");
let fourWeeksAgo = luxon.DateTime.now().minus(fourWeeks).toFormat("yyyy'-W'WW");
let activeWeeks = weeks
    .where(p => p.file.name >= fourWeeksAgo && p.file.name <= currentWeek)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Week", "Wins", "Challenges", "Improvements", "Reviewed"],
    activeWeeks.map(p => [
        p.file.link,
        p["wins"],
        p["challenges"],
        p["improvements"],
        p["Reviewed"]
    ])
);
```
