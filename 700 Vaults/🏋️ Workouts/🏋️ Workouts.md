---
alias:
- 🏋️ Workouts
- Workouts
tags:
- dashboard
---

# 🏋️ Workouts

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🏋️ New Workout",
    folder:"700 Vaults/🏋️ Workouts",
    split:true
})
```

## Recent Workouts

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let workouts = dv.pages("#workout");
let oneWeek = luxon.Duration.fromISO('P1W');
let recentWorkouts = workouts
    .where(p => p["day"])
    .where(p => !p["day"].path.startsWith('<')) // Filter out template
    .where(p => p["day"].path > luxon.DateTime.now().minus(oneWeek).toFormat('yyyy-MM-dd'));
dv.table(
    ["Workout", "Day", "Type", "Sets", "Reps"],
    recentWorkouts.map(p => [
        "[["+p.file.path+"|"+p.alias[0]+"]]",
        p["day"],
        p["type"],
        p["sets"],
        p["reps"]
    ])
);
```

