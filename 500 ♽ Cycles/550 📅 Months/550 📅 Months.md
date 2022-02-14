---
alias:
- 📅 Months
tags:
- dashboard
---

# 📅 Months

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

## Last 3 Months

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let months = dv.pages("#month");
let threeMonths = luxon.Duration.fromISO('P3M');
let currentMonth = luxon.DateTime.now().toFormat("yyyy-MM");
let threeMonthsAgo = luxon.DateTime.now().minus(threeMonths).toFormat("yyyy-MM");
let recentMonths = months
    .where(p => p.file.name >= threeMonthsAgo && p.file.name <= currentMonth)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Month", "Wins", "Challenges", "Improvements", "Reviewed"],
    recentMonths.map(p => [
        p.file.link,
        p["wins"],
        p["challenges"],
        p["improvements"],
        p["Reviewed"]
    ])
);
```
