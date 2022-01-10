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

## 1. Debrief

- [ ] Review [[🏆 Accomplishments]]
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let accomplishments = dv.pages("#accomplishment");
let activeAccomplishments = accomplishments
    .where(p => p["quarter"])
    .where(p => p["quarter"].path == this.current().file.name);
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
    .where(p => p["quarter"])
    .where(p => p["quarter"].path == this.current().file.name);
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

<mark style="background: #529CCAA6;">Working::</mark> 
<mark style="background: #529CCAA6;">Not Working::</mark> 
<mark style="background: #E255A1A6;">Changes::</mark> 

Playlist:: 
- [ ] 🎵 Create new Quarterly Playlist in Spotify
- [ ] ✂️ Cull or promote song from [Hmm 👀](https://open.spotify.com/playlist/1X8R0AaMzOJgacwTJilH6J?si=d470eafd04054b6d)

## 2. Process

- [ ] Review [[570 ⌛️ Quarters|⌛️ Quarters]]
![[570 ⌛️ Quarters#<% tp.date.now("YYYY") %>]]
- [ ] Review [[350 🎯 Outcomes|🎯 Outcomes]] and [[330 🧗 Projects|🧗 Projects]]
