$.getJSON('http://127.0.0.1:5500/public/JSON/iplData.json', function (data) {
  data = data.extraRuns;
  let team = Object.keys(data);
  let runs = Object.values(data);
  let chart = Highcharts.chart('container2', {

    title: {
      text: 'Extra Runs In 2016'
    },

    subtitle: {
      text: 'Plain'
    },

    xAxis: {
      categories: team
    },

    series: [{
      type: 'column',
      colorByPoint: true,
      data: runs,
      showInLegend: false
    }]

  });


  $('#plain').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: false
      },
      subtitle: {
        text: 'Plain'
      }
    });
  });

  $('#inverted').click(function () {
    chart.update({
      chart: {
        inverted: true,
        polar: false
      },
      subtitle: {
        text: 'Inverted'
      }
    });
  });

  $('#polar').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: true
      },
      subtitle: {
        text: 'Polar'
      }
    });
  });
});