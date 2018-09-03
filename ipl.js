var csvtojson = require('csvtojson');
var fs = require('fs');
var matches = require('./matches.json');
var seasonWise = {
};
function iplmatches(matches){
    
  /*
   for(var i=0; i<matches.length; i++){
        var obj=  matches[i];
        var season=obj.season;
        if(seasonWise.hasOwnProperty(season))
        seasonWise[season]=seasonWise[season]+1;
        else 
       
        seasonWise[season]=1;
   } */
  
     matches.forEach(element => {
         
   
        var obj= element;
        var season=obj.season;
        if(seasonWise.hasOwnProperty(season))
        seasonWise[season]=seasonWise[season]+1;
        else 
        seasonWise[season]=1;
     })

     console.log(seasonWise);
     
     var json = JSON.stringify(seasonWise);

     fs.writeFileSync('problem1.json', json, 'utf8');
     
    
}
   
iplmatches(matches);