---
tags:
- dashboard
icon: 🧭
---

# ⏱️ Alignment Zone
## Insight

Go from vagueness to focus.
Give yourself the best chance of reaching what you actually seek.
Consider what you find exciting, desirable, beautiful or regrettable.
Note how the first answers are large and general, vague, without details.
Circle the vagueness and chip away at it (like Michelangelo with his hammer) with further questions:
- What do you really mean?
- What is this unlike?
- When have you felt this before?
- How might you put this in different terms?
Good thinking is precise.

## 🧭 Guiding Principles
![[003 🧭 Guiding Principles#🧭 Guiding Principles]]

## Review Cycles

### Weekly Insight

![[530 🗓 Weeks|🗓 Weeks]] 

### Monthly Insight

![[550 📅 Months|📅 Months]]

### Quarterly & Monthly Insight

![[570 ⌛️ Quarters]]

### Annual Plan & Insight

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let years = dv.pages("#year");
let activeYears = years
    .where(p => p.file.name == dv.luxon.DateTime.now().toFormat("yyyy"))
    .sort(p => p.file.name, 'asc');
activeYears.mutate(p => {
    p["objectives"] = p.file.inlinks
        .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#objective"));
    p["outcomes"] = p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#outcome"));
})
dv.table(
    ["Year", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Objectives⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Outcomes⠀⠀⠀⠀⠀⠀⠀⠀⠀"],
    activeYears.map(p => [
        p.file.link,
        p["objectives"].map(p => p.file.link),
        p["outcomes"].map(p => p.file.link),
        p["Status"]
    ])
);
```
