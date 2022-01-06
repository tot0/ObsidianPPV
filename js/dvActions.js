// Usage:
/// Actions for Today Table
// ```dataviewjs
// const {DvActions} = customJS
// DvActions.getTodayActionTable({app, dv, luxon, that:this}) 
// ```
/// Action Done/Undo Button
// ```dataviewjs
// const {DvActions} = customJS
// DvActions.getActionDoneButton({app, dv, luxon, that:this, action:dv.current()})
// ```
class DvActions {
    getActions(args) {
        const {ObsidianUtils} = customJS;
        const { luxon, dv } = args;
        return dv.pages('#action')
            .mutate(page => ObsidianUtils.mutateFieldToDate({luxon, page, field: "do-date"}));
    }

    getDoToday(args) {
        const {ObsidianUtils} = customJS;
        const { luxon } = args;
        let actions = this.getActions(args);
        let doToday = ObsidianUtils.activeActions(actions)
            .where(p => p["do-date-obj"] <= luxon.DateTime.now());
        let doTodaySorted = ObsidianUtils.sortActions(doToday);
        return doTodaySorted;
    }

    getTodayActionTable(args) {
        const {ObsidianUtils} = customJS;
        const {
            that,
            app,
            dv,
            luxon
        } = args;

        let todayActions = this.getDoToday(args);
        if (todayActions.length === 0) {
            console.log('todayActions Empty: ', args)
            return
        }
        return dv.table(
            ["Item", "Priority", "Do Date", "Status", "Projects", ""],
            todayActions.map(action => {
                return [
                    ObsidianUtils.getDisplayLink(action.file.name, action.alias[0].substring(0, 40)),
                    action["priority"],
                    action["do-date"],
                    action["status"],
                    action["projects"],
                    this.getActionDoneButton({that, action, app, luxon}),
                ]
            })
        );
    }

    getActionDoneButton(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            action,
            app,
            luxon,
        } = args;
        const { metaedit, buttons } = app.plugins.plugins
        const { update } = metaedit.api
        const { createButton } = buttons

        const status = action["status"];
        let buttonStr = "Done";
        let buttonAction = ObsidianUtils.updateActionStatusDone;
        if (status === Constants.action.status.done) {
            buttonStr = "Undo";
            buttonAction = ObsidianUtils.updateActionStatusActive;
        }
        return createButton({
            app,
            el: that.container,
            args: { name: buttonStr },
            clickOverride: {
                click: buttonAction,
                params: [{ action, update, luxon }]
            }
        });
    }

    getActionPriorityButtons(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            action,
            app,
        } = args;
        const { metaedit, buttons } = app.plugins.plugins
        const { update } = metaedit.api
        const { createButton } = buttons

        let priorityButtons = [];
        for (const priority of Constants.action.priority.orderedMap.keys()) {
            priorityButtons.push(createButton({
                app,
                el: that.container,
                args: {
                    name: priority,
                    class: "dataview-button",
                },
                clickOverride: {
                    click: ObsidianUtils.updateActionPriority,
                    params: [{
                        action,
                        update,
                        newPriority: priority,
                    }]
                }
            }))
        }

        return priorityButtons;
    }

    getActionStatusButtons(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            action,
            app,
            luxon
        } = args;
        const { metaedit, buttons } = app.plugins.plugins
        const { update } = metaedit.api
        const { createButton } = buttons

        let statusButtons = [];
        for (const status of Constants.action.status.orderedMap.keys()) {
            statusButtons.push(createButton({
                app,
                el: that.container,
                args: {
                    name: status,
                    class: "dataview-button",
                },
                clickOverride: {
                    click: ObsidianUtils.updateActionStatus,
                    params: [{
                        action,
                        update,
                        luxon,
                        newStatus: status,
                    }]
                }
            }))
        }

        return statusButtons;
    }

    getProjectStatusButtons(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            project,
            app,
            luxon
        } = args;
        const { metaedit, buttons } = app.plugins.plugins
        const { update } = metaedit.api
        const { createButton } = buttons

        let statusButtons = [];
        for (const status of Constants.project.status.orderedMap.keys()) {
            statusButtons.push(createButton({
                app,
                el: that.container,
                args: {
                    name: status,
                    class: "dataview-button",
                },
                clickOverride: {
                    click: ObsidianUtils.updateProjectStatus,
                    params: [{
                        project,
                        update,
                        luxon,
                        newStatus: status,
                    }]
                }
            }))
        }

        return statusButtons;
    }

    getOutcomeStatusButtons(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            outcome,
            app,
            luxon
        } = args;
        const { metaedit, buttons } = app.plugins.plugins
        const { update } = metaedit.api
        const { createButton } = buttons

        let statusButtons = [];
        for (const status of Constants.outcome.status.orderedMap.keys()) {
            statusButtons.push(createButton({
                app,
                el: that.container,
                args: {
                    name: status,
                    class: "dataview-button",
                },
                clickOverride: {
                    click: ObsidianUtils.updateOutcomeStatus,
                    params: [{
                        outcome,
                        update,
                        luxon,
                        newStatus: status,
                    }]
                }
            }))
        }

        return statusButtons;
    }

    getObjectiveStatusButtons(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            objective,
            app,
            luxon
        } = args;
        const { metaedit, buttons } = app.plugins.plugins
        const { update } = metaedit.api
        const { createButton } = buttons

        let statusButtons = [];
        for (const status of Constants.objective.status.orderedMap.keys()) {
            statusButtons.push(createButton({
                app,
                el: that.container,
                args: {
                    name: status,
                    class: "dataview-button",
                },
                clickOverride: {
                    click: ObsidianUtils.updateObjectiveStatus,
                    params: [{
                        objective,
                        update,
                        luxon,
                        newStatus: status,
                    }]
                }
            }))
        }

        return statusButtons;
    }

    getNewActionButtonContextAware(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            app,
            luxon,
            dv,
            project,
        } = args;
        const { buttons } = app.plugins.plugins
        const { createButton } = buttons

        // return this.getNewFileButton({
        //     that,
        //     app,
        //     luxon,
        //     buttonName: "🛠 New Action",
        //     folder: "300 🚰 Pipelines/320 🛠 Actions",
        //     split,
        // });

        let createAndUpdate = async args => {
            const {
                dv,
                filePath,
                project,
            } = args;
    
            let file = await ObsidianUtils.createNewNoteInVaultAndOpen(args);
            console.log(filePath);
            console.log(file);
            // Wait for file to be created.
            await new Promise(r => setTimeout(r, 300));
            let action = dv.page(file.path);
            console.log(action);
            console.log(project.file.path);
            await ObsidianUtils.updateActionWithProjectContext({project, action, ...args});
        };

        return createButton({
            app,
            el: that.container,
            args: {
                name: "🛠 New Action",
                color: "purple",
                class: "dataview-button",
            },
            clickOverride: {
                click: createAndUpdate,
                params: [{
                    app,
                    dv,
                    project,
                    filePath: `300 🚰 Pipelines/320 🛠 Actions/${luxon.DateTime.now().toFormat("yyyyMMddHHmmss")}.md`,
                    contents: "",
                    split: true
                }]
            }
        });
    }

    getNewFileButton(args) {
        const {Constants, ObsidianUtils} = customJS;
        const {
            that,
            app,
            luxon,
            buttonName,
            folder,
            split=false,
            nameFormat="yyyyMMddHHmmss",
        } = args;

        const { buttons } = app.plugins.plugins
        const { createButton } = buttons;

        return createButton({
            app,
            el: that.container,
            args: {
                name: buttonName,
                color: "purple",
                class: "dataview-button",
            },
            clickOverride: {
                click: ObsidianUtils.createNewNoteInVaultAndOpen,
                params: [{
                    app,
                    filePath: `${folder}/${luxon.DateTime.now().toFormat(nameFormat)}.md`,
                    contents: "",
                    split: split
                }]
            }
        });
    }
}
