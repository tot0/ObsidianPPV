---
alias:
- 🌏 Years
tags:
- dashboard
---

# 🌏 Years

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon:dv.luxon,
    that:this,
    buttonName:"🌏 New Year",
    folder:"500 ♽ Cycles/590 🌏 Years",
    nameFormat:"yyyy",
    split:true
})
```

## Years

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let years = dv.pages("#year");
let sortedYears = years
    .where(p => p.file.name.length == 4)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Year", "Theme", "Quarters", "Objectives", "Outcomes"],
    sortedYears.map(p => [
        p.file.link,
        p["theme"],
        p["quarters"],
    ])
);
```
