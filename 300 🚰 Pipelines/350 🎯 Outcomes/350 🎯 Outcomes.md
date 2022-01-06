---
alias:
- 🎯 Outcomes
tags:
- dashboard
---

# 🎯 Outcomes
## Active
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🎯 New Outcome",
    folder:"300 🚰 Pipelines/350 🎯 Outcomes",
    split:true
})
```
### Underway
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let outcomes = dv.pages("#outcome");
let underwayOutcomes = outcomes
    .where(p => p["status"] == Constants.outcome.status.underway)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Outcome", "Priority", "Projects", "Quarters", "Status"],
    underwayOutcomes.map(p => [
        p.file.link,
        p["priority"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#project"))
            .map(p => p.file.link),
        p["quarters"],
        p["status"]
    ])
);
```
### Not Started
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let outcomes = dv.pages("#outcome");
let underwayOutcomes = outcomes
    .where(p => p["status"] == Constants.outcome.status.notStarted)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Outcome", "Priority", "Projects", "Quarters", "Status"],
    underwayOutcomes.map(p => [
        p.file.link,
        p["priority"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#project"))
            .map(p => p.file.link),
        p["quarters"],
        p["status"]
    ])
);
```

## Completed
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let outcomes = dv.pages("#outcome");
let underwayOutcomes = outcomes
    .where(p => p["status"] == Constants.outcome.status.completed)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Outcome", "Priority", "Quarters", "Status"],
    underwayOutcomes.map(p => [p.file.link, p["priority"], p["quarters"], p["status"]])    ["Outcome", "Priority", "Projects", "Quarters", "Status"],
    underwayOutcomes.map(p => [
        p.file.link,
        p["priority"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#project"))
            .map(p => p.file.link),
        p["quarters"],
        p["status"]
    ])
);
```