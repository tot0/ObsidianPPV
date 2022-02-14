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
        let fromIso = luxon.DateTime.fromISO;
        let days = dv.pages("#day");
        let daysInRange = days.where(p => {
            let date = fromIso(p.file.name);
            return date >= start && date <= end;
        });
        let sortedDays = daysInRange.sort(p => p.file.name);
        //let last2 = Array.from(daysInRange);
        //last2.sort((p1, p2) => p1.file.name < p2.file.name ? -1 : 1);
        // Total Sleep Times
        let totalSleeps = sortedDays.map(p => {
            if (p["Total Sleep"]) {
                let hm = p["Total Sleep"].split(":");
                return (parseInt(hm[0]) + parseInt(hm[1]) / 60).toFixed(2)
            } else {
                return null
            }
        }).array();
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
                }]
            },
            options: {
                indexAxis: 'x',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                spanGaps: true
            }
        }
        
        dv.el("h3", "Total Sleep");
        window.renderChart(sleepChartData, that.container);
        // Out of Bed Times
        let times = sortedDays.map(p => {
            if (p["Out of Bed"]) {
                let hm = p["Out of Bed"].split(":");
                return (parseInt(hm[0]) + parseInt(hm[1]) / 60).toFixed(2)
            } else {
                return null
            }
        }).array();
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
        dv.el("h3", "Out of Bed");
        window.renderChart(timeChartData, that.container);
        // Weights
        let weights = sortedDays.map(p => {
            if (p["Weight"]) {
                return parseFloat(p["Weight"])
            } else {
                return null
            }
        }).array();
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
}