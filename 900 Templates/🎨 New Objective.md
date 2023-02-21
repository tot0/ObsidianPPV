---
tags:
- objective
created: <% tp.file.creation_date() %>
pillars: []
years: []
category: 
start: 
finish: 
---

# New Objective
Priority:: 1
Pillars:: 
Years:: 
Status:: 
```dataviewjs
const {DvActions} = customJS
DvActions.getObjectiveStatusButtons({app, dv, luxon:dv.luxon, that:this, objective:dv.current()})
```

## Why?
> ？

## How?
> ?

Challenges:: 

## Outcomes
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let objectiveOutcomes = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#outcome"));
let sortedOutcomes = ObsidianUtils.sortOutcomes(objectiveOutcomes);
dv.table(
    ["Outcome", "Priority", "Quarters", "Status"],
    sortedOutcomes.map(p => [p.file.link, p["priority"], p["quarters"], p["status"]])
);
```

## Notes
