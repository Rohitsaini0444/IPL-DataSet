module.exports = {

  matchesPlayed: function (matchData) {
    let seasonWise = matchData.reduce(function (output, current) {
      if (output.hasOwnProperty(current.season))
        output[current.season] = output[current.season] + 1;
      else
        output[current.season] = 1;
      return output
    }, {});

    return seasonWise; //  this function is returning Object  only
  },

  winnerTeams: function (matches) {
    let obj = matches.reduce(function (output, current) {
      if (output.hasOwnProperty(current.winner)) {
        if (output[current.winner].hasOwnProperty(current.season))
          output[current.winner][current.season] = output[current.winner][current.season] + 1;
        else
          output[current.winner][current.season] = 1;
      } else {
        output[current.winner] = {};
        output[current.winner][current.season] = 1;
      }
      return output;
    }, {});

    return obj; // this function is returning Object  only
  },

  extraRuns: function (deliveries) {

    let extras = deliveries.filter(function (data) {
      return (parseInt(data.match_id) >= 577 && parseInt(data.match_id) <= 636);
    }).reduce(function (output, current) {
      let ex = parseInt(current.extra_runs)
      if (output.hasOwnProperty(current.bowling_team))
        output[current.bowling_team] = output[current.bowling_team] + ex;
      else
        output[current.bowling_team] = ex;
      return output;
    }, {});

    return extras; // this function is returning Object  only
  },

  economicalBowler: function (deliveries) {

    let bowlers = deliveries.filter(function (data) {
      return (parseInt(data.match_id) >= 518 && parseInt(data.match_id) <= 576);
    }).reduce(function (output, current) {
      let ex = parseInt(current.total_runs)
      if (output.hasOwnProperty(current.bowler)) {
        output[current.bowler]['runs'] = output[current.bowler]['runs'] + ex;
        output[current.bowler]['balls'] = output[current.bowler]['balls'] + 1;
      } else {
        output[current.bowler] = {
          "runs": ex,
          "balls": 1
        }
      }
      return output;
    }, {});
    let keys = Object.keys(bowlers).reduce(function (output, current) {
      output[current] = (bowlers[current].runs * 6 / bowlers[current].balls).toFixed(2);
      return output;
    }, {})
    let result = Object.entries(keys).sort(function (aa, bb) {
      return aa[1] - bb[1];

    }).slice(0, 10);

    return result; // this function is returning Array  only
  }
}