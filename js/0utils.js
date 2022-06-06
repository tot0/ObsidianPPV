class ObsidianUtils {
    // Actions
    compareActionStatus(a, b) {
        const {Constants} = customJS;
        return Constants.action.status.orderedMap.get(a) > Constants.action.status.orderedMap.get(b) ? 1 : -1;
    }

    compareActionPriority(a, b) {
        const {Constants} = customJS;
        return Constants.action.priority.orderedMap.get(a) > Constants.action.priority.orderedMap.get(b) ? 1 : -1;
    }

    getActionFieldCompareFunc(field) {
        const {ObsidianUtils} = customJS;
        const map = {
            'status': ObsidianUtils.compareActionStatus,
            'priority': ObsidianUtils.compareActionPriority,
            'do-date': (a, b) => a < b ? -1 : 1,
            'alias': (a, b) => a[0] > b[0] ? -1 : 1
        };
        return map[field];
    }

    // > 0	 sort b before a
    // < 0	 sort a before b
    // === 0 keep original order of a and b
    compareActions(a, b) {
        const defaultFieldOrder = [ "alias"];
        for (const field of defaultFieldOrder) {
            if (a[field] != b[field]) {
                return this.getActionFieldCompareFunc(field)(a[field], b[field]);
            }
        }
        return 0;
    }

    sortActions(actions) {
        return actions
            //.sort(p => p["projects"][0], 'asc')
            //.sort(p => p["status"], 'asc', this.compareActionStatus)
            .sort(p => p["alias"][0], 'desc')
            .sort(p => p["do-date-obj"], 'desc')
            .sort(p => p["priority"], 'asc', this.compareActionPriority)
            ;
    }

    activeActions(actions) {
        const {Constants} = customJS;
        return actions
            .where(p => (p["status"] != Constants.action.status.done) &&
                        (p["status"] != Constants.action.status.removed));
    }

    async updateActionStatusDone(args) {
        const {
            action,
            update,
            luxon
        } = args;
        const {Constants} = customJS;
        await update("Status", Constants.action.status.done, action.file.path);
        const today = luxon.DateTime.now().toFormat("yyyy-MM-dd");
        await update("Done Date", `[[${today}]]`, action.file.path);
    }

    async updateActionStatusActive(args) {
        const {
            action,
            update,
        } = args;
        const {Constants} = customJS;
        await update("Status", Constants.actions.status.active, action.file.path);
        await update("Done Date", "", action.file.path);
    }

    async updateActionStatus(args) {
        const {
            action,
            update,
            luxon,
            newStatus,
        } = args;
        const {Constants, ObsidianUtils} = customJS;
        if (newStatus === Constants.action.status.done) {
            await ObsidianUtils.updateActionStatusDone({action, update, luxon});
        } else {
            await update("Status", newStatus, action.file.path);
            await update("Done Date", "", action.file.path);
        }
    }

    async updateActionPriority(args) {
        const {
            action,
            update,
            newPriority,
        } = args;
        const {Constants} = customJS;
        await update("Priority", newPriority, action.file.path);
        if (newPriority === Constants.action.priority.scheduled) {
            // Scheduled notes are expected to start with two 24 hour times separated by -, 19:00-22:00
            let startEnd = action.alias[0].substring(0 ,11);
            let start = startEnd.substring(0, 5);
            await update("startTime", start, action.file.path);
            let end = startEnd.substring(6, 11);
            await update("endTime", end, action.file.path);
            await update("date", action["do-date"].path, action.file.path);
            await update("title", action.alias[0].substring(12), action.file.path);
        }
    }

    // Projects
    compareProjectStatus(a, b) {
        const {Constants} = customJS;
        return Constants.project.status.orderedMap.get(a) > Constants.project.status.orderedMap.get(b);
    }

    sortProjects(projects) {
        const {ObsidianUtils} = customJS;
        return projects
            .sort(p => p["priority"], 'asc')
            .sort(p => p["status"], 'desc', ObsidianUtils.compareProjectStatus);
    }

    async updateProjectStatusCompleted(args) {
        const {
            project,
            update,
            luxon
        } = args;
        const {Constants} = customJS;
        await update("Status", Constants.project.status.completed, project.file.path);
        const today = luxon.DateTime.now().toFormat("yyyy-MM-dd");
        await update("finish", `[[${today}]]`, project.file.path);
    }

    async updateProjectStatus(args) {
        const {
            project,
            update,
            luxon,
            newStatus,
        } = args;
        const {Constants, ObsidianUtils} = customJS;
        if (newStatus === Constants.project.status.completed) {
            await ObsidianUtils.updateProjectStatusCompleted({project, update, luxon});
        } else {
            await update("Status", newStatus, project.file.path);
            await update("finish", "", project.file.path);
        }
    }

    // TODO: Add various fields to projects that would be useful for tables
    // Remaining Active Actions
    // Completed Actions
    // Done Percent
    decorateProject() {
    }

    // Outcomes
    compareOutcomeStatus(a, b) {
        const {Constants} = customJS;
        return Constants.outcome.status.orderedMap.get(a) > Constants.outcome.status.orderedMap.get(b);
    }

    sortOutcomes(outcomes) {
        const {ObsidianUtils} = customJS;
        return outcomes
            .sort(p => p["status"], 'desc', ObsidianUtils.compareOutcomeStatus);
    }

    async updateOutcomeStatusCompleted(args) {
        const {
            outcome,
            update,
            luxon
        } = args;
        const {Constants} = customJS;
        await update("Status", Constants.outcome.status.completed, outcome.file.path);
        const today = luxon.DateTime.now().toFormat("yyyy-MM-dd");
        await update("finish", `[[${today}]]`, outcome.file.path);
    }

    async updateOutcomeStatus(args) {
        const {
            outcome,
            update,
            luxon,
            newStatus,
        } = args;
        const {Constants, ObsidianUtils} = customJS;
        if (newStatus === Constants.outcome.status.completed) {
            await ObsidianUtils.updateOutcomeStatusCompleted({outcome, update, luxon});
        } else {
            await update("Status", newStatus, outcome.file.path);
            await update("finish", "", outcome.file.path);
        }
    }

    // Objectives
    compareObjectiveStatus(a, b) {
        const {Constants} = customJS;
        return Constants.objective.status.orderedMap.get(a) > Constants.objective.status.orderedMap.get(b);
    }

    sortObjectives(objectives) {
        const {ObsidianUtils} = customJS;
        return objectives
            .sort(p => p["priority"], 'asc')
            .sort(p => p["status"], 'desc', ObsidianUtils.compareObjectiveStatus);
    }

    async updateObjectiveStatusCompleted(args) {
        const {
            objective,
            update,
            luxon
        } = args;
        const {Constants} = customJS;
        await update("Status", Constants.objective.status.completed, objective.file.path);
        const today = luxon.DateTime.now().toFormat("yyyy-MM-dd");
        await update("finish", `[[${today}]]`, objective.file.path);
    }

    async updateObjectiveStatus(args) {
        const {
            objective,
            update,
            luxon,
            newStatus,
        } = args;
        const {Constants, ObsidianUtils} = customJS;
        if (newStatus === Constants.objective.status.completed) {
            await ObsidianUtils.updateOutcomeStatusDone({objective, update, luxon});
        } else {
            await update("Status", newStatus, objective.file.path);
            await update("finish", "", objective.file.path);
        }
    }

    // Misc
    getDisplayLink(target, display) {
        return `[[${target}|${display}]]`;
    }

    mutateFieldToDate(args) {
        const {
            page,
            field,
            luxon
        } = args;
        if (page[field]) {
            // This ridiculous string manipulation is to get only the filename (of #days) removing any `.md` suffix.
            page[field + "-obj"] = luxon.DateTime.fromISO(page[field].path.split(/.*[\/|\\]/).pop().replace('.md', ''));   
        } else {
            page[field + "-obj"] = null;
        }
    }

    async updateActionWithProjectContext(args) {
        const {
            app,
            action,
            project,
        } = args;
        const { metaedit } = app.plugins.plugins
        const { update } = metaedit.api

        await update("Pillars", project["Pillars"], action.file.path);
        await update("Projects", `[[${project.file.name}]]`, action.file.path);
    }

    async createNewNoteInVaultAndOpen(args) {
        const {
            app,
            filePath,
            contents,
            split=false,
        } = args;
        try {
            // No idea why I wanted to try this, it's kinda funny, would need to put some sound design in what would actually be good sound effects for LifeOS/PPV.
            //let sound = new Audio("https://soundcamp.org/sounds/381/tom/A/low-tom-one-shot-a-key-06-Gjt.mp3");
            //await sound.play();
            await app.vault.create(filePath, contents);
            const file = app.vault.getAbstractFileByPath(filePath);
            if (split) {
                await app.workspace.splitActiveLeaf().openFile(file);
            } else {
                app.workspace.activeLead.openFile(file);
            }
            return file;
        } catch (e) {
            console.log(`[createNewNoteInVaultAndOpen] Failed: ${e}`);
        }
        return null;
    }
}
