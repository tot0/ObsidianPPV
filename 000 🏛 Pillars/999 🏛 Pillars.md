---
alias:
- Pillars Dashboard
- 🏛 Pillars
- Pillars
tags:
- dashboard
---

```dataview
TABLE WITHOUT ID
    file.link as "Pillar",
    pillar-group AS "Pillar Group"
FROM #pillar
WHERE pillar-group != null
SORT pillar-group asc
```

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon:dv.luxon,
    that:this,
    buttonName:"🏛 New Pillar",
    folder:"000 🏛 Pillars",
    split:true
})
```
