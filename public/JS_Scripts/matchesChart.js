/*var obj=[];
$.getJSON('../problem1.json',function(data){

 obj = Object.entries( data);
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'IPL Matches Per Year'
    },
    subtitle: {
        text: 'Source: <a href="https://www.iplt20.com"/>IPL</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No. Of Matches'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: obj,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});

});    

*/

$.getJSON('./iplData.json',function(data){
    var obj=[];
   data = data.matchesPlayed;
 obj = Object.entries( data);
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'IPL Matches Per Year'
    },
    subtitle: {
        text: 'Source: <a href="https://www.iplt20.com"/>IPL</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'No. Of Matches'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: obj,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});

});