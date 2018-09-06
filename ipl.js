/* 
var fs = require('fs');
var matchData = require('./matches.json');


function MatchesPlayed(matchData) {
  var seasonWise = {};
  matchData.forEach(element => {
    var season = element.season;
    if (seasonWise.hasOwnProperty(season))
      seasonWise[season] = seasonWise[season] + 1;
    else
      seasonWise[season] = 1;
  })

  console.log(seasonWise);

  var json = JSON.stringify(seasonWise);

  fs.writeFileSync('problem1.json', json, 'utf8');


  return seasonWise;
};


module.exports = {
  
 matches: MatchesPlayed,


} 
 */


module.exports = {

  matchesPlayed: function (matchData) {
    var seasonWise = {};
    matchData.forEach(element => {
      var season = element.season;
      if (seasonWise.hasOwnProperty(season))
        seasonWise[season] = seasonWise[season] + 1;
      else
        seasonWise[season] = 1;
    });

    return seasonWise;        //  this function is returning Object  only
  },








  winnerTeams: function (matches) {
    var obj = {};
    matches.forEach(element => {
      if (obj.hasOwnProperty(element.winner)) {

        if (obj[element.winner].hasOwnProperty(element.season))

        {
          obj[element.winner][element.season] = obj[element.winner][element.season] + 1;
        } else {
          obj[element.winner][element.season] = 1;
        }

      } else {
        obj[element.winner] = {};
        obj[element.winner][element.season] = 1;
      }



    })
    return obj;          // this function is returning Object  only
  },








  extraRuns: function (deliveries) {

    var extras = {};
    deliveries.forEach(element => {

      if (parseInt(element.match_id, 10) >= 577 && parseInt(element.match_id, 10) <= 636) {
        var ex = parseInt(element.extra_runs, 10)
        if (ex != 0) {

          if (extras.hasOwnProperty(element.bowling_team))
            extras[element.bowling_team] = extras[element.bowling_team] + ex;
          else
            extras[element.bowling_team] = ex;
        }

      }
    });
    return extras;   // this function is returning Object  only

  },







  economicalBowler: function (deliveries) {
    var bowlers = {};
    deliveries.forEach(element => {

      if (parseInt(element.match_id, 10) >= 518 && parseInt(element.match_id, 10) <= 576) {
        var ex = parseInt(element.total_runs, 10)


        if (bowlers.hasOwnProperty(element.bowler)) {

          bowlers[element.bowler]['runs'] = bowlers[element.bowler]['runs'] + ex;
          bowlers[element.bowler]['balls'] = bowlers[element.bowler]['balls'] + 1;
        } else {
          bowlers[element.bowler] = {
            "runs": ex,
            "balls": 1
          }
        }
      }

    });


    var result = {};
    var arr = [];
    arr = Object.entries(bowlers);
    var economy_rate = 0;

    arr.forEach(element => {

      economy_rate = (element[1].runs * 6) / element[1].balls;

      result[element[0]] = economy_rate.toFixed(2);


    });

    var entries = Object.entries(result);
    var sortedData = entries.sort((a, b) => a[1] - b[1]);
    sortedData = sortedData.slice(0, 10);
    return sortedData;  // this function is returning array  only

  }

}