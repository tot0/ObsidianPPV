---
tags:
- project
created: <% tp.file.creation_date() %>
pillars: []
outcomes: []
year: []
quarter: []
start:
finish: 
---

# New Project

Priority:: 1
Pillars:: 
Outcomes:: 
Year:: 
Quarter:: 
Status:: 
```dataviewjs
const {DvActions} = customJS
DvActions.getProjectStatusButtons({app, dv, luxon, that:this, project:dv.current()})
```

## Why?
> ？

## Actions
```dataviewjs
const {DvActions} = customJS
//DvActions.getNewActionButton({app, dv, luxon, that:this})
DvActions.getNewActionButtonContextAware({
    app,
    dv,
    luxon,
    that:this,
    project:dv.current(),
    split:true
})
```

### Todo
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projActions = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#action"));
let activeActions = ObsidianUtils.activeActions(projActions);
let sortedActions = ObsidianUtils.sortActions(activeActions);
//dv.el("b", activeActions);
dv.table(
	["Action", "Priority", "Do Date", "Status"],
    sortedActions.map(p => ["[["+p.file.name+ "|"+p.alias[0].substring(0, 60)+"]]" , p["Priority"], p["Do Date"], p["Status"]]));
```

### Done
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projActions = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#action"))
    .where(p => p["status"] == Constants.action.status.done);
let sortedActions = ObsidianUtils.sortActions(projActions);
dv.table(
	["Action", "Priority", "Do Date", "Status"],
    sortedActions.map(p => ["[["+p.file.name+ "|"+p.alias[0].substring(0, 60)+"]]" , p["Priority"], p["Do Date"], p["Status"]]));
```

## Notes
