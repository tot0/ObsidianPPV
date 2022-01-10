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
    luxon,
    that:this,
    buttonName:"⌛️ New Quarter",
    folder:"500 ♽ Cycles/570 ⌛️ Quarters",
    nameFormat:"yyyyQq",
    split:true
})
```

## [[2022]]

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let quarters = dv.pages("#quarter");
let activeQuarters = quarters
    .where(p => p.file.name == luxon.DateTime.now().toFormat("yyyy"))
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
            .count(),
        p["projects"].map(p => p.file.link),
        p["status"]
    ])
);
```

## Previous

