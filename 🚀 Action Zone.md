---
tags:
- dashboard
---
# 🚀 Action Zone

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
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"📝 New Note",
    folder:"700 Vaults/Notes",
    split:true,
})
```

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

## Tomorrow

```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
// TODO: Split this out and debug priorty ordering.
//DvActions.getTodayActionTable({app, dv, luxon, that:this})
let tomorrow = luxon.DateTime.now().plus(luxon.Duration.fromMillis(86400000)); // 1 day in milliseconds
let tomorrowActions = DvActions.getActiveActions({luxon, dv, start: tomorrow.startOf('day'), end: tomorrow.endOf('day')});
dv.table(
    ["Item", "Priority", "Do Date", "Status", "Projects", ""],
    tomorrowActions.map(action => [
        ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
        action["priority"],
        action["do-date"],
        action["status"],
        action["projects"],
        DvActions.getActionDoneButton({that:this, action, app, luxon})
    ])
);
```

## Next 7 Days

```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
let tomorrow = luxon.DateTime.now().plus(luxon.Duration.fromMillis(86400000)); // 1 day in milliseconds
let sevenDays = luxon.DateTime.now().plus(luxon.Duration.fromMillis(86400000 * 7)); // 7 days in milliseconds
let sevenDaysActions = DvActions.getActiveActions({luxon, dv, start: tomorrow.startOf('day'), end: sevenDays.endOf('day')});
let groupedNext7Days = sevenDaysActions.groupBy(action => action["do-date"]);

for (let day of groupedNext7Days) {
    dv.header(3, day.key);
    dv.table(
        ["Item", "Priority", "Status", "Projects"],
        day.rows
            .map(action => [
                ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
                action["priority"],
                action["status"],
                action["projects"]
            ])
    );
}
```

## Calendar?
