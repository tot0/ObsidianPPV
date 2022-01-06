---
alias:
- <% tp.date.now(format="MMMM, YYYY") %>
- ✨ <% tp.date.now(format="MMMM, YYYY") %>
tags:
- month
---
[<% tp.date.now("MMMM", "P-1M") %>](<% tp.date.now("YYYY-MM", "P-1M") %>) <=> [<% tp.date.now("MMMM", "P+1M") %>](<% tp.date.now("YYYY-MM", "P+1M") %>)

# ✨ <% tp.date.now(format="MMMM, YYYY") %>
Quarter:: [[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>]]
Year:: [<% tp.date.now("YYYY") %>](<% tp.date.now("YYYY") %>)


### Days
```dataviewjs
let pages = dv.pages("#day").where(p => p.month.display == "December");
dv.el("b", Object.entries(pages));
let page_stats = pages.map(page => [page.file.link, page["Sleep Start Time"], page["Awake Time"], page["Total Sleep"], page["Sleep Efficiency"], page["Out of Bed"]]);
dv.table(
	["Day", "Sleep Start Time", "Awake Time", "Total Sleep", "Sleep Efficiency %", "Out of Bed"],
	page_stats);

function sumn(sums, stats) {
	sums.map((val, idx) => val + stats[idx])
}
let sums = page_stats.reduce(sumn, [])
```