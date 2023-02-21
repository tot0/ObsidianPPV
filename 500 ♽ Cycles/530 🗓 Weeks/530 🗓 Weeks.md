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
    luxon:dv.luxon,
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
let fourWeeks = dv.luxon.Duration.fromISO('P20W');
let currentWeek = dv.luxon.DateTime.now().toFormat("yyyy'-W'WW");
let fourWeeksAgo = dv.luxon.DateTime.now().minus(fourWeeks).toFormat("yyyy'-W'WW");
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


for (let week of activeWeeks) {
    dv.header("3", week.file.link);
    dv.header("4", "Wins");
    dv.el("p", week["wins"]);
    dv.header("4", "Challenges");
    dv.el("p", week["challenges"]);
    dv.header("4", "Improvements");
    dv.el("p", week["improvements"]);
    dv.header("4", `Reviewed: ${week["reviewed"]}`);
}
```
