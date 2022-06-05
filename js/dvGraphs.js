class DvGraphs {
    getDailyMetricGraphs(args) {
        const {
            that,
            start,
            end,
            window,
            dv,
            luxon
        } = args;
        let days = dv.pages("#day");
        let daysInRange = days.where(p => {
            let date = luxon.DateTime.fromISO(p.file.name);
            return date >= start && date <= end;
        });
        let sortedDays = daysInRange.sort(p => p.file.name);
        // Total Sleep Times
        let maxSleep = 0;
        let totalSleeps = sortedDays.map(p => {
            if (p["Total Sleep"]) {
                let hm = p["Total Sleep"].split(":");
                let sleep = (parseInt(hm[0]) + parseInt(hm[1]) / 60).toFixed(2);
                if (sleep > maxSleep) {
                    maxSleep = sleep;
                }
                return sleep;
            } else {
                return null;
            }
        }).array();
        // trailing 7 day average line
        let trailing7Day = this.getTrailingNDayAverage({
            field_extractor: p => {
                if (p["Total Sleep"]) {
                    let hm = p["Total Sleep"].split(":");
                    return parseInt(hm[0]) + parseInt(hm[1]) / 60;
                } else {
                    return null;
                }
            },
            days: days,
            n: 7,
            start: start,
            end: end,
            luxon: luxon
        });
        const sleepChartData = {
            type: 'line',
            data: {
                labels: sortedDays.map(p => p.file.name),
                datasets: [{
                    label: 'Sleep Hours',
                    data: totalSleeps,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Goal',
                    data: new Array(totalSleeps.length).fill(7),
                    backgroundColor: [
                        'rgba(99, 255, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(99, 255, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Trailing 7 Day Avg',
                    data: trailing7Day,
                    backgroundColor: [
                        'rgba(255, 255, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 255, 132, 1)'
                    ],
                    borderWidth: 1,
                    //lineTension: 0, 
                }]
            },
            options: {
                indexAxis: 'x',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                spanGaps: true,
                yMax: maxSleep > 9 ? Math.ceil(maxSleep) + 1 : 9,
            }
        }
        
        dv.el("h3", "Total Sleep");
        window.renderChart(sleepChartData, that.container);
        // Out of Bed Times
        let maxOut = 0;
        let minOut = 999;
        let times = sortedDays.map(p => {
            if (p["Out of Bed"]) {
                let hm = p["Out of Bed"].split(":");
                let out = (parseInt(hm[0]) + parseInt(hm[1]) / 60).toFixed(2);
                if (out > maxOut) {
                    maxOut = out;
                }
                if (out < minOut) {
                    minOut = out;
                }
                return out;
            } else {
                return null;
            }
        }).array();
        // trailing 7 day average line
        let trailing7DayOutOfBed = this.getTrailingNDayAverage({
            field_extractor: p => {
                if (p["Out of Bed"]) {
                    let hm = p["Out of Bed"].split(":");
                    return parseInt(hm[0]) + parseInt(hm[1]) / 60;
                } else {
                    return null;
                }
            },
            days: days,
            n: 7,
            start: start,
            end: end,
            luxon: luxon
        });
        let timeChartData = {
            type: 'line',
            data: {
                labels: sortedDays.map(p => p.file.name),
                datasets: [{
                    label: 'Out of Bed',
                    data: times,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Goal',
                    data: new Array(times.length).fill(7.00),
                    backgroundColor: [
                        'rgba(99, 255, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(99, 255, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Trailing 7 Day Avg',
                    data: trailing7DayOutOfBed,
                    backgroundColor: [
                        'rgba(255, 255, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 255, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'x',
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },
                spanGaps: true,
                yMax: maxOut > 9 ? Math.ceil(maxOut) : 9,
                yMin: minOut < 5 ? Math.floor(minOut) : 5,
            }
        }
        dv.el("h3", "Out of Bed");
        window.renderChart(timeChartData, that.container);
        // Weights
        let weights = sortedDays.map(p => {
            if (p["Weight"]) {
                return parseFloat(p["Weight"])
            } else {
                return null;
            }
        }).array();
        // trailing 7 day average line
        let trailing7DayWeight = this.getTrailingNDayAverage({
            field_extractor: p => {
                if (p["Weight"]) {
                    return parseFloat(p["Weight"])
                } else {
                    return null;
                }
            },
            days: days,
            n: 7,
            start: start,
            end: end,
            luxon: luxon
        });
        const weightChartData = {
            type: 'line',
            data: {
                labels: sortedDays.map(p => p.file.name),
                datasets: [{
                    label: 'Weight',
                    data: weights,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Goal',
                    data: new Array(weights.length).fill(79.0),
                    backgroundColor: [
                        'rgba(99, 255, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(99, 255, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Trailing 7 Day Avg',
                    data: trailing7DayWeight,
                    backgroundColor: [
                        'rgba(255, 255, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 255, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'x',
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },
                spanGaps: true
            }
        }
        dv.el("h3", "Weight");
        window.renderChart(weightChartData, that.container);
    }

    getTrailingNDayAverage(args) {
        const {
            field_extractor,
            days,
            n,
            start,
            end,
            luxon
        } = args;
        let preN = start.minus(luxon.Duration.fromISO(`P${n}D`));
        let preNDays = days.where(p => {
            let date = luxon.DateTime.fromISO(p.file.name);
            return date >= preN && date <= end;
        }).map(field_extractor).array();

        let periodLength = Math.ceil(end.diff(start, 'days').toObject().days);
        let trailingNDayAvg = new Array(periodLength);
        let lastNsum = 0.0;
        for (let d = 0; d < n; d++) {
            if (preNDays[d] == null) {
                preNDays[d] = d == 0 ? 0.0 : lastNsum / d
            }
            lastNsum = lastNsum + preNDays[d];
        }
        for (let i = 0; i < trailingNDayAvg.length; i++) {
            if (i % 3 == 0) {
                trailingNDayAvg[i] = (lastNsum / n).toFixed(2);
            } else {
                trailingNDayAvg[i] = null;
            }

            if (preNDays[7+i] == null) {
                preNDays[7+i] = lastNsum / n
            }
            lastNsum = lastNsum - preNDays[i] + preNDays[7+i];
        }
        return trailingNDayAvg;
    }
}
