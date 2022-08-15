---
alias:
- 🧗 Projects
tags:
- dashboard
---

# 🧗 Projects
## Active
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🧗 New Project",
    folder:"300 🚰 Pipelines/330 🧗 Projects",
    split:true
})
```
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => p["status"] == Constants.project.status.active)
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Project", "Priority", "Quarters", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["Quarter"],
        p["status"]
    ])
);
```

### Next Up
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => (p["status"] == Constants.project.status.nextUp) || (p["status"] == Constants.project.status.onHold))
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Project", "Priority", "Quarter", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["quarter"],
        p["status"]
    ])
);
```

### Future
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => p["status"] == Constants.project.status.future)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Project", "Priority", "Quarter", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["quarter"],
        p["status"]
    ])
);
```

## Done
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => p["status"] == Constants.project.status.completed)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Project", "Priority", "Quarter", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["quarter"],
        p["status"]
    ])
);
```
