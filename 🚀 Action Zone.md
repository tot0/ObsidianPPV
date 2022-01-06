---
tags:
- dashboard
---
# 🚀 Action Zone

## Today

 ```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
// TODO: Split this out and debug priorty ordering.
//DvActions.getTodayActionTable({app, dv, luxon, that:this})

let todayActions = DvActions.getDoToday({luxon, dv});
dv.table(
    ["Item", "Priority", "Do Date", "Status", "Projects", ""],
    todayActions.map(action => [
        ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
        action["priority"],
        action["do-date"],
        action["status"],
        action["projects"],
        DvActions.getActionDoneButton({that:this, action, app, luxon})
    ])
);
```

```dataviewjs
const {DvActions} = customJS
//DvActions.getNewActionButton({app, dv, luxon, that:this})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🛠 New Action",
    folder:"300 🚰 Pipelines/320 🛠 Actions",
    split:true
})
```

</br>

```dataviewjs
const {DvActions} = customJS
//DvActions.getNewActionButton({app, dv, luxon, that:this})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌄 New Day",
    folder:"500 ♽ Cycles/520 🌄 Days",
    split:true,
    nameFormat: "yyyy-MM-dd",
})
```
