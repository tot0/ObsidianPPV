---
alias:
- <% tp.date.now("YYYY") %>-W<% tp.date.now("WW") %>
- 🗓 <% tp.date.now("YYYY") %>-W<% tp.date.now("WW") %>
tags:
- week
---

# 🗓 <% tp.date.now("YYYY") %>-W<% tp.date.now("WW") %>

Year:: [[<% tp.date.now("YYYY") %>]]
Quarter:: [[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>]]
Month:: [[<% tp.date.now("YYYY-MM") %>|<% tp.date.now("MMMM") %>]]

Focus:: 

## ## Actions Taken

```dataviewjs
const {ObsidianUtils, Constants} = customJS;
let week = luxon.DateTime.fromISO(this.current().file.name);
let startWeek = week.startOf('week');
let endWeek = week.endOf('week');
let weekActions = dv.pages("#action")
    .where(p => p["done-date"])
    .where(p => {
        let doneDate = luxon.DateTime.fromISO(p["done-date"].path);
        return doneDate >= startWeek && doneDate <= endWeek;
    })
    .array();
let sortedWeekActions = weekActions.sort((a, b) => ObsidianUtils.compareActions(a, b));

dv.table(
    ["Action", "Done Date", "Priority", "Projects"],
    sortedWeekActions.map(p => [
        "[["+p.file.path+"|"+p.alias[0]+"]]",
        p["done-date"],
        p["priority"],
        p["projects"]
    ])
)
```

## I. Pillars

### [[003 🧭 Guiding Principles|🧭 Guiding Principles]]

### Reflection

- [ ] Add [[🏆 Accomplishments]]
Wins:: 
- [ ] Add [[😫 Disappointments]]
Challenges:: 

```dataviewjs
let weekImprovements = dv.pages("#day")
    .where(p => p["week"] && p["week"].path == this.current().file.path)
    .where(p => p["improvement"])
    .array();
dv.table(
    ["Improvement", "Day"],
    weekImprovements.map(p => [
        p["Improvement"],
        p.file.link
    ])
);
```

Improvements:: 

TODO: Link Framing

## II. Pipelines

### Cleanup

- [ ] Review Flagged Emails, clear out.
- [ ] Desktop & Download Folder (Re-Locate or Delete)
- [ ] Process Physical Inbox

### Calendar

- [ ] Review last two weeks
TODO: Calendar view ideally, otherwise table of last two weeks meetings (and meetings with notes under a heading linked to a day in this week.)
- [ ] Review upcoming 3 weeks
TODO: Calendar view ideally, otherwise table of upcoming meetings

### Tracking

- [ ] Review & Update [Azure DevOps](https://msdata.visualstudio.com/Vienna/_queries/query/127dcf1b-6e50-4bf1-bcbc-75a2dd71ea86/)
- [ ] Review "Waiting" Actions
- [ ] Review Active [[330 🧗 Projects|🧗 Projects]]

## III. Review Finished!
Reviewed:: 
- [ ] Add a new [[530 🗓 Weeks|🗓 Weeks]]
