$.getJSON('http://127.0.0.1:5500/public/JSON/iplData.json', function (data) {
    let years = [];
    years = Object.keys(data.matchesPlayed);
    let obj = [];
    obj = Object.entries(data.winnerTeams);
    let dataSeries = [];
    obj.forEach(element => {
        let arr = [];
        for (let i = 0; i < years.length; i++) {
            if (element[1].hasOwnProperty(years[i]))
                arr[i] = element[1][years[i]];
            else
                arr[i] = 0;
        }
        dataSeries.push({
            name: element[0],
            data: arr
        })

    });
    Highcharts.chart('container1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Matches Won by Teams'
        },
        xAxis: {
            categories: years
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Team Names'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: dataSeries
    });
});