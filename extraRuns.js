var csvtojson = require('csvtojson');
var fs = require('fs');
var deliveries = require('./deliveries.json');
var extras = {};

function extraRuns(deliveries) {


    deliveries.forEach(element => {
 
        if (parseInt(element.match_id,10) >= 577 && parseInt(element.match_id, 10 )<= 636) {
            var ex = parseInt(element.extra_runs,10)
            if (ex != 0) {

                if (extras.hasOwnProperty(element.bowling_team))
                    extras[element.bowling_team] = extras[element.bowling_team] + ex;
                else
                    extras[element.bowling_team] =  ex;
            }

        }
    });

    console.log(extras)
    
       var json = JSON.stringify(extras);

       fs.writeFileSync('problem3.json', json, 'utf8');
    

}
extraRuns(deliveries);