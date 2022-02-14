---
alias:
- <% tp.date.now(format="MMMM, YYYY") %>
- ✨ <% tp.date.now(format="MMMM, YYYY") %>
tags:
- month
---

# ✨ <% tp.date.now(format="MMMM, YYYY") %>
[<% tp.date.now("MMMM", "P-1M") %>](<% tp.date.now("YYYY-MM", "P-1M") %>) <=> [<% tp.date.now("MMMM", "P+1M") %>](<% tp.date.now("YYYY-MM", "P+1M") %>)
Year:: [<% tp.date.now("YYYY") %>](<% tp.date.now("YYYY") %>)
Quarter:: [[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>]]

Theme:: 

## Actions Taken

```dataviewjs
const {DvActions, Constants} = customJS;
let month = luxon.DateTime.fromISO(this.current().file.name);
let monthActions = DvActions.getDoneActions({luxon, dv, start: month.startOf('month'), end: month.endOf('month')});
monthActions.mutate(action => {
    let week = action["done-date-obj"].toFormat("yyyy'-W'WW");
    action["week"] = dv.page(week);
});
let groupedWeekActions = monthActions.groupBy(action => action["week"]);

for (let week of groupedWeekActions) {
    dv.header(3, week.key);
    dv.table(
        ["Item", "Priority", "Do Date", "Projects"],
        week.rows
            .map(action => [
                ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
                action["priority"],
                action["do-date"],
                action["projects"]
            ])
    );
    dv.taskList(week.rows.file.tasks.where(t => !t.completed), true)
}
```

### Days

```dataviewjs
const {DvGraphs} = customJS;
let month = luxon.DateTime.fromISO(this.current().file.name);
DvGraphs.getDailyMetricGraphs({
    that: this,
    start: month.startOf('month'),
    end: month.endOf('month'),
    dv,
    luxon,
    window
});
```


## Review Objectives

```dataviewjs
const {Constants, ObsidianUtils, DvActions} = customJS;

let activeProjects = dv.pages("#project")
    .where(p => p["status"] == Constants.project.status.active)
    .sort(p => p["priority"], 'asc');

for (let project of activeProjects) {
    dv.header(3, project.file.link);
    let projActions = project.file.inlinks
        .map(l => dv.page(l))
        .where(p => p.file.tags.includes("#action"))
        .where(p => p["projects"].map(p => p.path).includes(project.file.name));
    let activeActions = ObsidianUtils.activeActions(projActions);
    if (activeActions.length > 0) {
        let sortedActions = ObsidianUtils.sortActions(activeActions);
        dv.table(
            ["Item", "Priority", "Status", "Do Date"],
            sortedActions
                .map(action => [
                    ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
                    action["priority"],
                    action["status"],
                    action["do-date"]
                ])
        );
    } else {
        dv.el("b", "Project has no active actions!")
    }
    dv.el("p", `![[${project.file.path}#Notes]]`);
}
```