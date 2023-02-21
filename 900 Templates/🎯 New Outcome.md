---
tags:
- outcome
created: <% tp.file.creation_date() %>
pillars: []
objectives: []
projects: []
quarters: []
years: []
start:
target_finish: 
finish: 
---

# New Outcome
## Why?
> ？

Priority:: 1
Pillars:: 
Objectives:: 
Projects:: 
Quarters:: 
Years:: 
Status:: 
```dataviewjs
const {DvActions} = customJS
DvActions.getOutcomeStatusButtons({app, dv, luxon:dv.luxon, that:this, outcome:dv.current()})
```
## Projects
```dataview
TABLE WITHOUT ID
    file.link AS "Project",
    Priority,
    Quarter,
    Status
FROM #project
WHERE contains(file.outlinks, this.file.link)
```
## Notes
