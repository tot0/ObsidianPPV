---
tags:
- dashboard
icon: 🔮
---
# 🔮 Knowledge Vault

## Last:: P10D

```dataviewjs
let page = this.current();
let now = dv.luxon.DateTime.now();
let lookback = dv.luxon.Duration.fromISO(page["last"]);

let infos = dv.pages("#information")
    .sort(p => p.file.mtime, 'desc')
    .where(p => dv.luxon.DateTime.fromISO(p.file.mtime) > now.minus(lookback))
    .where(p => {
        console.log(`${Object.entries(p.file)}`);
        console.log(`${p.file.mday.toString().substring(0,10)}`);
        return p;
    })
    .groupBy(p => p.file.mday.toString().substring(0,10))
    .sort(g => g.key, 'desc');

for (let info of infos) {
    dv.header("2", `[[${info.key}]]`);
    for (let i of info.rows) {
        dv.header("4", `[[${i.file.path}|${i.aliases[0]}]] - ${i.tags[0]}`);
    }
}

if (infos.length == 0) {
    dv.el("p", "No information came in this week...")
}
```
