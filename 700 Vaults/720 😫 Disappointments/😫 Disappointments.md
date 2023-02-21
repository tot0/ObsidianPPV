---
alias:
- 😫 Disappointments
- Disappointments
tags:
- dashboard
---

# 😫 Disappointments

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon:dv.luxon,
    that:this,
    buttonName:"😫 New Disappointment",
    folder:"700 Vaults/720 😫 Disappointments",
    split:true
})
```

## Recent Disappointments

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let disappointments = dv.pages("#disappointment");
let activeDisappointments = disappointments
    .where(p => p["quarter"])
    .where(p => p["quarter"].path == dv.luxon.DateTime.now().toFormat("yyyyQq"));
dv.table(
    ["Disappointment", "Quarter", "Month", "Week", "Day"],
    activeDisappointments.map(p => [
        `[[${p.file.path}|${p.alias[0]}]]`,
        p["quarter"],
        p["month"],
        p["week"],
        p["day"]
    ])
);
```

## All Disappointments

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let disappointments = dv.pages("#disappointment");
let activeDisappointments = disappointments
    .where(p => p["quarter"]);
dv.table(
    ["Disappointment", "Quarter", "Month", "Week", "Day"],
    activeDisappointments.map(p => [
        "[["+p.file.path+"|"+p.alias[0]+"]]",
        p["quarter"],
        p["month"],
        p["week"],
        p["day"]
    ])
);
```