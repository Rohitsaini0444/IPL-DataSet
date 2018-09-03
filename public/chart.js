$(function(){
var ourRequest=new XMLHttpRequest();
ourRequest.open('GET','file:///home/dev/rohit/ipl-rohit/problem1.json')
ourRequest.onload =function(){
    var data= ourRequest.responseText;
    var year= Object.keys(data);
    var matches=Object.values(data);
}
})


function renderChart(year,matches){Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: year
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series:[{
        name:"MatchesPlayed",
        data:matches

    }]
});}
