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


## 1. Debrief

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

Working::

Not Working:: 

Changes::

Playlist:: 
- [ ] 🎵 Create new Quarterly Playlist in Spotify
- [ ] ✂️ Cull or promote song from [Hmm 👀](https://open.spotify.com/playlist/1X8R0AaMzOJgacwTJilH6J?si=d470eafd04054b6d)

## 2. Process

- [ ] Review [[570 ⌛️ Quarters|⌛️ Quarters]]
![[570 ⌛️ Quarters#<% tp.date.now("YYYY") %>]]
- [ ] Review [[350 🎯 Outcomes|🎯 Outcomes]] and [[330 🧗 Projects|🧗 Projects]]
