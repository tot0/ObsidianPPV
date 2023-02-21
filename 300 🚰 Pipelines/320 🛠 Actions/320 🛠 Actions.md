---
alias:
- 🛠 Actions
tags:
- dashboard
title: 🛠 Actions
---

# 🛠 Actions

## Last:: P20D

```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
let page = this.current();
let now = dv.luxon.DateTime.now();
let lookback = dv.luxon.Duration.fromISO(page["last"]);
//let lookback = dv.luxon.DateTime.now().minus(dv.luxon.Duration.fromMillis(86400000 * 20)); // 7 days in milliseconds
let actions = DvActions.getDoneActions({luxon:dv.luxon, dv, start: now.minus(lookback).endOf('day'), end: now});
let groupedActions = actions.groupBy(action => action["do-date"]).sort(g => g.key, "desc");

for (let day of groupedActions) {
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
