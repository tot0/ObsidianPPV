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
    luxon:dv.luxon,
    that:this,
    buttonName:"📅 New Month",
    folder:"500 ♽ Cycles/550 📅 Months",
    nameFormat:"yyyy-MM",
    split:true
})
```

## Last 3 Months
e
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let months = dv.pages("#month");
let threeMonths = dv.luxon.Duration.fromISO('P12M');
let currentMonth = dv.luxon.DateTime.now().toFormat("yyyy-MM");
let threeMonthsAgo = dv.luxon.DateTime.now().minus(threeMonths).toFormat("yyyy-MM");
let recentMonths = months
    .where(p => p.file.name >= threeMonthsAgo && p.file.name <= currentMonth)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Month", "Wins", "Challenges", "Improvements", "Reviewed"],
    recentMonths.map(p => [
        `[[${p.file.name}|${p.alias[0]}]]`,
        p["wins"],
        p["challenges"],
        p["improvements"],
        p["Reviewed"]
    ])
);
```
