
$.getJSON('../problem2.json', function (data) {
    var obj = [];
    var years = [];
    obj = Object.entries(data);

    $.getJSON('../problem1.json', function (data1) {
        years = (Object.keys(data1));

        var dataSeries = [];
        obj.forEach(element => {
    
            var arr = [];

            for (var i = 0; i < years.length; i++) {
                if (element[1].hasOwnProperty(years[i]))
                    arr[i] = element[1][years[i]];
                else
                    arr[i] = 0;
            }
            console.log(arr);
           
            dataSeries.push({
                name:element[0], data: arr
            })
            
        });
        console.log(dataSeries);

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
});