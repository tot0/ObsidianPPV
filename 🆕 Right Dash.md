```dataviewjs
const {DvActions} = customJS
//DvActions.getNewActionButton({app, dv, luxon, that:this})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🛠 New Action",
    folder:"300 🚰 Pipelines/320 🛠 Actions",
    split:true
})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌄 New Day",
    folder:"500 ♽ Cycles/520 🌄 Days",
    split:true,
    nameFormat: "yyyy-MM-dd",
})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"📝 New Note",
    folder:"700 Vaults/Notes",
    split:true,
})

let now = luxon.DateTime.now();
dv.el("p", `[[${now.toFormat("yyyy-MM-dd")}]]`)
dv.el("p", `[[${now.toFormat("yyyy'-W'WW")}]]`)
dv.el("p", `[[${now.toFormat("yyyy-MM")}]]`)
dv.el("p", `[[${now.toFormat("yyyy'Q'q")}]]`)
dv.el("p", `[[${now.toFormat("yyyy")}]]`)
```

