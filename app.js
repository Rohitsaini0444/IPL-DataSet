const ipl = require('./ipl.js');
const matches = require('./matches.json');
const deleveries= require('./deliveries.json');
const fs= require('fs');
var iplData={};




iplData['matchesPlayed']=ipl.matchesPlayed(matches);
console.log(iplData)
iplData['winnerTeams']=ipl.winnerTeams(matches);
iplData['extraRuns']=ipl.extraRuns(deleveries);
iplData['economicalBowler']=ipl.economicalBowler(deleveries);

console.log(iplData)


fs.writeFileSync('public/iplData.json', JSON.stringify(iplData) );