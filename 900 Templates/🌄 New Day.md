---
alias:
- <% tp.date.now("YYYY-MM-DD") %>
- <% tp.date.now(format="dddd, MMM Do") %>
- 🌄 <% tp.date.now(format="dddd, MMM Do") %>
tags:
- iso<% tp.date.now("YYYY-MM-DD") %>
- day
date: <% tp.file.creation_date() %>
---
[[<% tp.date.now("YYYY-MM-DD", -1) %>]] <=> [[<% tp.date.now("YYYY-MM-DD", 1) %>]]

# 🌄 <% tp.date.now(format="dddd, MMM Do") %>
Week:: [[<% tp.date.now("YYYY") %>-W<% tp.date.now("WW") %>]]
Month:: [[<% tp.date.now("YYYY-MM") %>|<% tp.date.now("MMMM") %>]]
Quarter:: [[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>]]
Year:: [[<% tp.date.now("YYYY") %>]]
```dataview
TABLE WITHOUT ID
	sleep-start-time AS "Sleep Start Time",
	awake-time AS "Awake Time",
	total-sleep AS "Total Sleep",
	sleep-efficiency AS "Sleep Efficiency %",
	out-of-bed AS "Out of Bed"
FROM #iso<% tp.date.now("YYYY-MM-DD") %>
```

## Morning Startup
### Startup Stats
Sleep Start Time:: 
Awake Time:: 
Total Sleep:: 
Deep Sleep:: 
Sleep Efficiency:: 
Out of Bed:: 
Weight:: 

## Thoughts


## **Today's Action Items**

 ```dataviewjs
const {DvActions} = customJS
DvActions.getTodayActionTable({app, dv, luxon, that:this})
```

## [[☯️ Mental Clarity]]

-   [ ] **Check:** What should I be checking Daily?

# End of Day

## Today's Wins

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let todayActions = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#action"))
    .where(p => p["status"] == Constants.action.status.done);
let sortedActions = ObsidianUtils.sortActions(todayActions);
dv.table(
	["Action", "Priority", "Do Date", "Status"],
    sortedActions.map(p => ["[["+p.file.name+ "|"+p.alias[0].substring(0, 60)+"]]" , p["Priority"], p["Do Date"], p["Status"]]));
```

Improvements:: 

```toggl
SUMMARY FROM <% tp.date.now("YYYY-MM-DD") %> TO <% tp.date.now("YYYY-MM-DD") %>
```
## Pinboard
