---
tags:
- dashboard
title: 🚀 Action Zone
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

let today = luxon.DateTime.now();
let birthdays = dv.pages("#person")
    .where(p => p["birthday"])
    .mutate(p => {
        p["birthday-obj"] = luxon.DateTime.fromISO(p["birthday"].path);
        p["birthday-this-year-obj"] = p["birthday-obj"].set({year: today.year});
    })
    .where(p => p["birthday-this-year-obj"] < today.plus(luxon.Duration.fromISO("P1W")) && p["birthday-this-year-obj"] >= today)
;

let todayActions = DvActions.getDoToday({luxon, dv});
dv.table(
    ["Item", "Priority", "Do Date", "Status", "Projects", ""],
    birthdays.map(b => [
        b.file.link,
        "🟧🎂",
        `[[${b["birthday-this-year-obj"].toFormat("yyyy-MM-dd")}]]`,
        
    ]).concat(
        todayActions.map(action => [
            ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
            action["priority"],
            action["do-date"],
            action["status"],
            action["projects"],
            DvActions.getActionDoneButton({that:this, action, app, luxon})
        ])
    )
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

```dataviewjs
// const { DvActions } = customJS;
// const { renderCalendar } = app.plugins.plugins["obsidian-full-calendar"];
// let now = luxon.DateTime.now();
// let nextDays = luxon.Duration.fromISO("P1W");
// let actions = DvActions.getActions({
//     luxon,
//     dv,
//     start: now,
//     end: now.plus(nextDays).endOf('day')
// }).where(a => a["startTime"] != null && a["endTime"] != null);
// actions = actions.map(a => {
//         return {
//             startDate: a["date"],
//             startTime: a["startTime"],
//             endTime: a["endTime"],
//             id: `${a.file.name}`,
//             title: a["title"]
//         }
//     }).array();

// dv.el("p", actions)

// let calendar = renderCalendar(
//     this.container,
//     actions
// );
// calendar.render();
```
