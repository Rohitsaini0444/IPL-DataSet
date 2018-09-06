var matches = require('./matches.json');

var fs = require('fs');


function winner(matches) {
  var obj = {

  };
  matches.forEach(element => {
    if (obj.hasOwnProperty(element.winner)) {
     
      if (obj[element.winner].hasOwnProperty(element.season))
        
    {  
       obj[element.winner][element.season] = obj[element.winner][element.season]+1;
        }
      else
       { obj[element.winner][element.season] = 1;}

    } else {
      obj[element.winner] = {}; 
      obj[element.winner][element.season] = 1;
    }



  })


  console.log(obj);
  
 var json = JSON.stringify(obj);
fs.writeFileSync('problem2.json',json,'utf8' );

}
winner(matches);