module.exports = {
  
  matches: function () {
    var fs = require('fs');
    var matchData = require('./matches.json');
    var seasonWise = {};
    matchData.forEach(element => {
      var obj = element;
      var season = obj.season;
      if (seasonWise.hasOwnProperty(season))
        seasonWise[season] = seasonWise[season] + 1;
      else
        seasonWise[season] = 1;
    })

    console.log(seasonWise);

    var json = JSON.stringify(seasonWise);

    fs.writeFileSync('problem1.json', json, 'utf8');


    return {};
  }

}