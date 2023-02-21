---
alias:
- ⌛️ Quarters
tags:
- dashboard
---

# ⌛️ Quarters
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon:dv.luxon,
    that:this,
    buttonName:"⌛️ New Quarter",
    folder:"500 ♽ Cycles/570 ⌛️ Quarters",
    nameFormat:"yyyyQq",
    split:true
})
```

## [[2023]]
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let quarters = dv.pages("#quarter");
let activeQuarters = quarters
    //.where(p => p.file.name.startsWith(dv.luxon.DateTime.now().toFormat("yyyy")))
    .where(p => p.file.name.startsWith("2023"))
    .sort(p => p.file.name, 'asc');
activeQuarters.mutate(p => {
    p["projects"] = p.file.inlinks
        .map(l => dv.page(l))
        .where(p => p.file.tags.includes("#project"));
})
dv.table(
    ["Quarter", "Active Projects", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Projects⠀⠀⠀⠀⠀⠀⠀⠀⠀"],
    activeQuarters.map(p => [
        p.file.link,
        p["projects"]
            .where(p => p["status"] == Constants.project.status.active)
            .length,
        p["projects"].map(p => p.file.link),
        p["status"]
    ])
);
```

## [[2022]]

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let quarters = dv.pages("#quarter");
let activeQuarters = quarters
    //.where(p => p.file.name.startsWith(dv.luxon.DateTime.now().toFormat("yyyy")))
    .where(p => p.file.name.startsWith("2022"))
    .sort(p => p.file.name, 'asc');
activeQuarters.mutate(p => {
    p["projects"] = p.file.inlinks
        .map(l => dv.page(l))
        .where(p => p.file.tags.includes("#project"));
})
dv.table(
    ["Quarter", "Active Projects", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Projects⠀⠀⠀⠀⠀⠀⠀⠀⠀"],
    activeQuarters.map(p => [
        p.file.link,
        p["projects"]
            .where(p => p["status"] == Constants.project.status.active)
            .length,
        p["projects"].map(p => p.file.link),
        p["status"]
    ])
);
```

## Previous

