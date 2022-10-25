---
alias:
- <% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>
- ⌛️ <% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>
tags:
- quarter
---

# ⌛️ <% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>
Year:: [[<% tp.date.now("YYYY") %>]]

🔥 **Do 12-Week Years!**

## 0. Framing
![[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>#0. Framing]]

## 1. Debrief

### Health Metrics
- [ ] Review [[💗 Health & Fitness]]
```dataviewjs
const {DvGraphs} = customJS;
const quarter = DateTime.fromFormat(this.current().file.name.slice(-1), 'q');
DvGraphs.getDailyMetricGraphs({
    that: this,
    start: quarter.startOf('quarter'),
    end: quarter.endOf('quarter'),
    dv,
    luxon,
    window
});
```

### Action Highlights

- [ ] Review Productivity
```dataviewjs
let quarter = this.current().file.name;
//dv.el("p", quarter);
const startDateOfQuarter = DateTime.fromFormat(quarter.slice(-1), 'q');
const endDateOfQuarter = startDateOfQuarter.endOf('quarter');
//dv.el("p", startDateOfQuarter);
//dv.el("p", endDateOfQuarter);
let currDate = new Date(startDateOfQuarter);
let numOfWorkingDays = 0;
while(currDate < endDateOfQuarter){
  currDate.setDate(currDate.getDate()+1);
  var day=currDate.getDay();
  if(day!=0&&day!=6){numOfWorkingDays++;}
 }
dv.el("p", "Working Days in " + quarter + ": " + numOfWorkingDays);
let numWorkingHours = numOfWorkingDays * 8
dv.el("p", "Working Hours in " + quarter + ": " + numWorkingHours);
```
```toggl
SUMMARY FROM 2022-04-01 TO 2022-06-30
SORT DESC
```

- [ ] Review [[710 🏆 Accomplishments]]
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let accomplishments = dv.pages("#accomplishment");
let activeAccomplishments = accomplishments
    .where(p => p["Quarter"])
    .where(p => dv.array(p["Quarter"])
                  .where(q => {
                      let page = dv.page(q);
                      if (page === undefined) {
                          return q.path.contains(this.current().file.name);
                      } else {
                          return page.file.name == this.current().file.name;
                      }
                   }).length > 0
    )
    .sort(p => p["Day"], 'asc');
dv.table(
    ["Accomplishment", "Quarter", "Month", "Week", "Day"],
    activeAccomplishments.map(p => [
        "[["+p.file.path+"|"+p.alias[0]+"]]",
        p["quarter"],
        p["month"],
        p["week"],
        p["day"]
    ])
);
```

- [ ] Review [[😫 Disappointments]]
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let disappointments = dv.pages("#disappointment");
let activeDisappointments = disappointments
    .where(p => p["Quarter"])
    .where(p => dv.array(p["Quarter"])
                  .where(q => {
                      let page = dv.page(q);
                      if (page === undefined) {
                          return q.path.contains(this.current().file.name);
                      } else {
                          return page.file.name == this.current().file.name;
                      }
                   }).length > 0
    )
    .sort(p => p["Day"], 'asc');
dv.table(
    ["Disappointment", "Quarter", "Month", "Week", "Day"],
    activeDisappointments.map(p => [
        "[["+p.file.path+"|"+p.alias[0]+"]]",
        p["quarter"],
        p["month"],
        p["week"],
        p["day"]
    ])
);
```
#### Wins
```dataviewjs
const quarter = DateTime.fromFormat(this.current().file.name.slice(-1), 'q');
let quarterMonths = dv.pages("#month")
    .where(p => {
        let month = luxon.DateTime.fromISO(p.file.name);
        return month >= quarter.startOf('quarter') && month <= quarter.endOf('quarter')
    }).sort(d => d.file.name, 'asc');
for (let month of quarterMonths) {
    dv.header(4, month.file.link);
    dv.el("p",  month["Wins"]);
}
```

Wins:: 

#### Challenges
```dataviewjs
const quarter = DateTime.fromFormat(this.current().file.name.slice(-1), 'q');
let quarterMonths = dv.pages("#month")
    .where(p => {
        let month = luxon.DateTime.fromISO(p.file.name);
        return month >= quarter.startOf('quarter') && month <= quarter.endOf('quarter')
    }).sort(d => d.file.name, 'asc');
for (let month of quarterMonths) {
    dv.header(4, month.file.link);
    dv.el("p",  month["Challenges"]);
}
```

Challenges:: 

#### Improvements

```dataviewjs
const quarter = DateTime.fromFormat(this.current().file.name.slice(-1), 'q');
let quarterMonths = dv.pages("#month")
    .where(p => {
        let month = luxon.DateTime.fromISO(p.file.name);
        return month >= quarter.startOf('quarter') && month <= quarter.endOf('quarter')
    }).sort(d => d.file.name, 'asc');
for (let month of quarterMonths) {
    dv.header(4, month.file.link);
    dv.el("p",  month["Improvements"]);
}
```

Improvements:: 

### Thoughts

```dataviewjs
const quarter = DateTime.fromFormat(this.current().file.name.slice(-1), 'q');
let quarterMonths = dv.pages("#month")
    .where(p => {
        let month = luxon.DateTime.fromISO(p.file.name);
        return month >= quarter.startOf('quarter') && month <= quarter.endOf('quarter')
    }).sort(d => d.file.name, 'asc');
for (let month of quarterMonths) {
    dv.header("3", month.file.link);
    dv.el("p", `![[${month.file.path}#Distilled Thoughts]]`);
}
```
#### Distilled Thoughts


### People
```dataviewjs
const quarter = DateTime.fromFormat(this.current().file.name.slice(-1), 'q');
let people = dv.pages("#day")
    .where(p => {
        let day = luxon.DateTime.fromISO(p.file.name);
        return day >= quarter.startOf('quarter') && day <= quarter.endOf('quarter')
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
    dv.el("p", "No interactions with people this quarter...")
}
```

### [[🎧 Music]]

Playlist:: 
- [ ] 🎵 Create new Quarterly Playlist in Spotify
- [ ] ✂️ Cull or promote song from [Hmm 👀](https://open.spotify.com/playlist/1X8R0AaMzOJgacwTJilH6J?si=d470eafd04054b6d)

## 2. Process

- [ ] Review [[570 ⌛️ Quarters|⌛️ Quarters]]
![[570 ⌛️ Quarters#<% tp.date.now("YYYY") %>]]
- [ ] Review [[350 🎯 Outcomes|🎯 Outcomes]] and [[330 🧗 Projects|🧗 Projects]]
