---
alias:
- 🏆 Accomplishments
- Accomplishments
tags:
- dashboard
---

# 🏆 Accomplishments

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🏆 New Accomplishment",
    folder:"700 Vaults/710 🏆 Accomplishments",
    split:true
})
```

## Recent Accomplishments

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let accomplishments = dv.pages("#accomplishment");
let activeAccomplishments = accomplishments
    .where(p => p["quarter"])
    .where(p => p["quarter"].path == luxon.DateTime.now().toFormat("yyyyQq"));
dv.table(
    ["Accomplishment", "Quarter", "Month", "Week", "Day"],
    activeAccomplishments.map(p => [
        "[["+p.file.path+"|"+p.alias[0]+"]]",
        p["quarter"],
        p["month"],
        p["week"],
        p["day"]
    ])
);
```

## All Accomplishments

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let accomplishments = dv.pages("#accomplishment");
let activeAccomplishments = accomplishments
    .where(p => p["quarter"]);
dv.table(
    ["Accomplishment", "Quarter", "Month", "Week", "Day"],
    activeAccomplishments.map(p => [
        "[["+p.file.path+"|"+p.alias[0]+"]]",
        p["quarter"],
        p["month"],
        p["week"],
        p["day"]
    ])
);
```