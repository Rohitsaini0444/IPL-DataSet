const ipl = require('./ipl.js');
const matches = require('./public/JSON/matches.json');
const deleveries= require('./public/JSON/deliveries.json');
const fs= require('fs');
var   iplData={};
  
iplData['matchesPlayed']=ipl.matchesPlayed(matches);
iplData['winnerTeams']=ipl.winnerTeams(matches);
iplData['extraRuns']=ipl.extraRuns(deleveries);
iplData['economicalBowler']=ipl.economicalBowler(deleveries);

fs.writeFileSync('public/JSON/iplData.json', JSON.stringify(iplData) );
