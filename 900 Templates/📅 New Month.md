---
alias:
- ✨ <% tp.date.now(format="MMMM, YYYY") %>
- <% tp.date.now(format="MMMM, YYYY") %>
tags:
- month
---

# ✨ <% tp.date.now(format="MMMM, YYYY") %>

[<% tp.date.now("MMMM", "P-1M") %>](<% tp.date.now("YYYY-MM", "P-1M") %>) <=> [<% tp.date.now("MMMM", "P+1M") %>](<% tp.date.now("YYYY-MM", "P+1M") %>)
Year:: [<% tp.date.now("YYYY") %>](<% tp.date.now("YYYY") %>)
Quarter:: [[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>]]

Theme:: 

## 0. Reflection

### Actions Taken
```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
let monthActions = DvActions.getDoneActions({luxon:dv.luxon, dv, start: month.startOf('month'), end: month.endOf('month')});
monthActions.mutate(action => {
    let week = action["done-date-obj"].toFormat("yyyy'-W'WW");
    action["week"] = week;//dv.page(week);
});
let groupedWeekActions = monthActions.groupBy(action => action["week"]);

for (let week of groupedWeekActions) {
    let week_date = dv.luxon.DateTime.fromISO(week.key);
    dv.header(3, ObsidianUtils.getDisplayLink(week.key, `${week.key}: ${week_date.startOf('week').toFormat("cccc, LLLL dd")} - ${week_date.endOf('week').toFormat("cccc, LLLL dd")}`));
    let week_page = dv.page(week.key);
    if (week_page) {
        dv.el("p", `**Focus:** ${week_page["focus"]}`);
    }

    dv.table(
        ["Item", "Priority", "Do Date", "Done Date", "Projects"],
        week.rows
            .map(action => [
                ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
                action["priority"],
                action["do-date"],
                action["done-date"],
                action["projects"]
            ])
    );
    dv.taskList(week.rows.file.tasks.where(t => !t.completed), true)
}
```

```dataviewjs
let month = this.current().file.name;
const startDateOfMonth = dv.luxon.DateTime.fromISO(this.current().file.name);
const endDateOfMonth = startDateOfMonth.endOf('month');
//dv.el("p", startDateOfQuarter);
//dv.el("p", endDateOfQuarter);
let currDate = new Date(startDateOfMonth);
let numOfWorkingDays = 0;
while(currDate < endDateOfMonth){
  currDate.setDate(currDate.getDate()+1);
  var day=currDate.getDay();
  if(day!=0&&day!=6){numOfWorkingDays++;}
 }
dv.el("p", "Working Days in " + month + ": " + numOfWorkingDays);
let numWorkingHours = numOfWorkingDays * 8
dv.el("p", "Working Hours in " + month + ": " + numWorkingHours);
```
```toggl
SUMMARY FROM 2022-04-01 TO 2022-04-30
SORT DESC
```

#### Reflect on your Actions

### Health Metrics

```dataviewjs
const {DvGraphs} = customJS;
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
DvGraphs.getDailyMetricGraphs({
    that: this,
    start: month.startOf('month'),
    end: month.endOf('month'),
    dv,
    luxon:dv.luxon,
    window
});
```

### Weekly Thoughts
```dataviewjs
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
let monthWeeks = dv.pages("#week")
    .where(p => {
        let week = dv.luxon.DateTime.fromISO(p.file.name);
        return week >= month.startOf('month') && week <= month.endOf('month')
    }).sort(d => d.file.name, 'asc');
for (let week of monthWeeks) {
    dv.header("3", week.file.link);
    dv.el("p", `![[${week.file.path}#Distilled Thoughts]]`);
}
```

#### Distilled Thoughts



### Wins
```dataviewjs
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
let monthWeeks = dv.pages("#week")
    .where(p => {
        let week = dv.luxon.DateTime.fromISO(p.file.name);
        return week >= month.startOf('month') && week <= month.endOf('month')
    }).sort(d => d.file.name, 'asc');
for (let week of monthWeeks) {
    dv.header(4, week.file.link);
    dv.el("p", week["Wins"]);
}
```

Wins::

### Challenges

```dataviewjs
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
let monthWeeks = dv.pages("#week")
    .where(p => {
        let week = dv.luxon.DateTime.fromISO(p.file.name);
        return week >= month.startOf('month') && week <= month.endOf('month')
    }).sort(d => d.file.name, 'asc');
for (let week of monthWeeks) {
    dv.header(4, week.file.link);
    dv.el("p", week["Challenges"]);
}
```

Challenges:: 

### Improvements
```dataviewjs
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
let monthWeeks = dv.pages("#week")
    .where(p => {
        let week = dv.luxon.DateTime.fromISO(p.file.name);
        return week >= month.startOf('month') && week <= month.endOf('month')
    }).sort(d => d.file.name, 'asc');
for (let week of monthWeeks) {
    dv.header(4, week.file.link);
    dv.el("p", week["Improvements"]);
}
```

Improvements:: 

### People
```dataviewjs
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
let people = dv.pages("#day")
    .where(p => {
        let day = dv.luxon.DateTime.fromISO(p.file.name);
        return day >= month.startOf('month') && day <= month.endOf('month')
    })
    .flatMap(d => d.file.inlinks
        .map(l => dv.page(l))
        .where(l => l.file.tags.includes("#person"))
        .map(p => [d, p])
    )
    .groupBy(i => i[1].file.name)
    .sort(i => i.rows.length, 'desc');


for (let person of people) {
    dv.header("4", `[[${person.key}]] - ${person.rows.length}`);
    for (let day of person.rows.sort(d => d[0].file.name, 'asc')) {
        let d = day[0];
        dv.el("p", `[[${person.key}#`+d.file.name+`]]`);
    }
}
if (people.length == 0) {
    dv.el("p", "No interactions with people this week...")
}
```

## I. Pillars

### [[003 🧭 Guiding Principles|🧭 Guiding Principles]]

### Quarterly Framing
![[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %># 0. Framing]]

### Review
- [ ] ![[999 🏛 Pillars|🏛 Pillars]]
- [ ] //Habits Database View
    - [ ] Tracking of Habits if doing that?
- [ ] // Fitness Plan Database View
- [ ] [[☯️ Mental Clarity]]

## II. Pipelines

### Review Objectives and Outcomes
- [ ] Mark Completed [[350 🎯 Outcomes|🎯 Outcomes]]/[[370 🎨 Objectives|🎨 Objectives]]
- [ ] Update Timelines
- [ ] New?

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let objectives = dv.pages("#objective");
let underwayObjectives = objectives
    .where(p => (p["status"] == Constants.objective.status.underway) || (p["status"] == Constants.objective.status.offTrack)|| (p["status"] == Constants.objective.status.paused))
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Objective", "Priority", "Outcomes", "Years", "Status"],
    underwayObjectives.map(p => [
        p.file.link,
        p["priority"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#outcome"))
            .map(p => p.file.link),
        p["years"],
        p["status"]
    ])
);
```
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

### Review Projects
- [ ] Update Status and Actions
- [ ] Prioritize
- [ ] Update Timelines

```dataviewjs
const {Constants, ObsidianUtils, DvActions} = customJS;

let activeProjects = dv.pages("#project")
    .where(p => p["status"] == Constants.project.status.active)
    .where(p => {
        //console.log(`p["Quarter"]: ${p["Quarter"]}, this["Quarter"]: ${this.current()["Quarter"]}, check: ${dv.array(p["Quarter"]).indexOf(this.current()["Quarter"])}`);
        return dv.array(p["Quarter"]).indexOf(this.current()["Quarter"]) != -1;
    })
    .sort(p => p["priority"], 'asc');

for (let project of activeProjects) {
    dv.header(3, project.file.link);
    let projActions = project.file.inlinks
        .map(l => dv.page(l))
        .where(p => p.file.tags.includes("#action"))
        .where(p => p["Projects"])
        .where(p => dv.array(p["Projects"]).where(proj => dv.page(proj).file.name == project.file.name).length > 0);
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
    //dv.el("p", `![[${project.file.path}#Notes]]`);
}
```

## III. Vaults

[[🤯 Mind Expansion]]

### Information

```dataviewjs
let month = dv.luxon.DateTime.fromISO(this.current().file.name);
let infos = dv.pages("#day")
    .where(p => {
        let day = dv.luxon.DateTime.fromISO(p.file.name);
        return day >= month.startOf('month') && day <= month.endOf('month')
    })
    .flatMap(d => d.file.inlinks
        .map(l => dv.page(l))
        .where(l => l.file.tags.includes("#information"))
        .map(p => [d, p])
    )
    .groupBy(i => i[1].file.name);


for (let info of infos) {
    dv.header("3", `[[${info.key}]]`);
    for (let day of info.rows) {
        let i = day[0];
        dv.el("p", `[[${info.key}#`+i.file.name+`]]`);
    }
}
if (infos.length == 0) {
    dv.el("p", "No information came in this month...")
}
```

### House-keeping

- [ ] Empty Trash 🗑
- [ ] Cleanup [Resources](file://./../../700 Vaults/Resources)

## IV. Bookkeeping
- [ ] Review [💰 Mint](https://mint.intuit.com/overview.event?utm_medium=direct&cta=nav_login_dropdown&ivid=bd5217e9-e5e8-4315-8fd4-122a970e2ebc)

## V. Nice!
Reviewed:: 
- [ ] Add a new [[550 📅 Months|📅 Months]]
