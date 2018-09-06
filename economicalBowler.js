var csvtojson = require('csvtojson');
var fs = require('fs');
var deliveries = require('./deliveries.json');
var bowlers = {};

function economicalBowler(deliveries) {

    deliveries.forEach(element => {

        if (parseInt(element.match_id, 10) >= 518 && parseInt(element.match_id, 10) <= 576) {
            var ex = parseInt(element.total_runs, 10)


            if (bowlers.hasOwnProperty(element.bowler)) {

                bowlers[element.bowler]['runs']= bowlers[element.bowler]['runs'] + ex;
                bowlers[element.bowler]['balls'] =  bowlers[element.bowler]['balls'] + 1;
            } else {
                     bowlers[element.bowler] = {
                    "runs": ex,
                    "balls": 1
                }
             

            }


        }

    });


   


/*    console.log(bowlers)


       var json = JSON.stringify(bowlers);

       fs.writeFileSync('problem4.json', json, 'utf8'); */
     
       var result={};
      var arr=[];
      arr= Object.entries(bowlers);
       var economy_rate=0;
     
      arr.forEach(element=>{
        
           economy_rate = (element[1].runs*6)/element[1].balls;
           
           result[element[0]]=economy_rate.toFixed(2);
    

// [["you",100],["me",75],["foo",116],["bar",15]]


// [["bar",15],["me",75],["you",100],["foo",116]]
  });

 var entries = Object.entries(result);
 var sorted = entries.sort((a, b) => a[1] - b[1]);
  sorted = sorted.slice(0,10);
  console.log(sorted);
  var json = JSON.stringify(sorted);

  fs.writeFileSync('problem4.json', json, 'utf8');  

}


economicalBowler(deliveries);