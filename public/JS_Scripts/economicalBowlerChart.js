
$.getJSON('./iplData.json', function(data){
  var obj=[];
  data = data.economicalBowler;
  obj=data;
  obj.map(element => {
       element[1]=parseFloat(element[1]);
       return element
   });

    Highcharts.chart('container3', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Most Economical Bowler of IPL '
        },
        subtitle: {
          text: 'Source: <a href="http://ipl.com">IPL</a>'
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
            text: 'Economical rate'
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
          data:  obj,
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