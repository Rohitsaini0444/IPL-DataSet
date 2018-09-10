 const assert= require('chai').assert;
const ipl= require('../ipl.js');


describe('matchesPlayed function',function () { 
        let matchesPlayed = ipl.matchesPlayed;
    it('matches should be a function',function(){
        assert.isFunction(matchesPlayed);

    });

    it('matches function should return expected result for tested data ',function(){

        let test_data = [];
        let expected = {};
        let dummy_data = [{
            'season':'2016'
           
        },{
            'season':'2017',
        },{
            'season':'2016',
        }];
        let result = {'2016':2,'2017':1};
    

         assert.deepEqual(matchesPlayed(dummy_data),result);
         
       assert.deepEqual(matchesPlayed(test_data),expected);

    });
    it('matches shold return object',function () {  

        assert.isObject(matchesPlayed([{},{}]));
    });

 }); 
 
describe('winnerTeams function',function () { 
    let winnerTeams = ipl.winnerTeams;
it('winnerTeams should be a function',function(){
    assert.isFunction(winnerTeams);

});

it('winnerTeams function should return expected result for tested data ',function(){

    let test_data = [];
    let expected = {};
    let dummy_data = [{
        'winner':'a',
        'season':'2015'
       
    },{
        'winner':'a',
        'season':'2016'
       
    },{
        'winner':'a',
        'season':'2016'
       
    }
    ,{
        'winner':'c',
        'season':'2016'
       
    },
    {
        'winner':'b',
        'season':'2016'
       
    },{
        'winner':'a',
        'season':'2017'
    },{
        'winner':'b',
        'season':'2017'
    }];
    
    let result = {'a':{'2015':1, '2016':2, '2017':1}
    ,'b':{
        '2016':1, '2017':1, } , 'c':{
            '2016':1
        }
    }
    assert.deepEqual(winnerTeams(dummy_data),result);
     
    assert.deepEqual(winnerTeams(test_data),expected);
});

 
     

it('winnerTeams shold return object',function () {  

    assert.isObject(winnerTeams([{},{}]));
});

}); 







describe('ExtraRuns function',function () { 
    let extraRuns = ipl.extraRuns;
it('extraRuns should be a function',function(){
    assert.isFunction(extraRuns);

});

it('extraRuns function should return expected result for tested data ',function(){

    let test_data = [];
    let expected = {};
    let dummy_data = [{
       'match_id':577 ,
      'bowling_team':'team1',
      'extra_runs':5
    },{ 'match_id':597 ,
        'bowling_team':'team2', 'extra_runs':4
    },{ 'match_id':577 ,
        'bowling_team':'team1', 'extra_runs':3
    }];
    let result = {'team1':8,'team2':4};
 

     assert.deepEqual(extraRuns(dummy_data),result);
     
   assert.deepEqual(extraRuns(test_data),expected);

});
it('extraRuns shold return object',function () {  

    assert.isObject(extraRuns([{},{}]));
});

}); 







describe('economicalBowler function',function () { 
    let economicalBowler = ipl.economicalBowler;
it('economicalBowler should be a function',function(){
    assert.isFunction(economicalBowler);

});

it('economicalBowler function should return expected result for tested data ',function(){

    let test_data = [];
    let expected = [];
    let dummy_data = [{
        'match_id':534 ,
       'bowler':'raj',
       'total_runs':5
     },{
        'match_id':534 ,
       'bowler':'alok',
       'total_runs':1
     },{
        'match_id':534 ,
       'bowler':'raj',
       'total_runs':1
     },{
        'match_id':534 ,
       'bowler':'raj',
       'total_runs':1
     },{
        'match_id':534 ,
       'bowler':'raj',
       'total_runs':2
     },{ 'match_id':554 ,
         'bowler':'alok', 'total_runs':2
     },{ 'match_id':545 ,
         'bowler':'aman', 'total_runs':1
     }];
    let result = [['aman', '6.00'],['alok','9.00'],['raj','13.50']];
 console.log(economicalBowler(dummy_data))

     assert.deepEqual(economicalBowler(dummy_data),result);
     
   assert.deepEqual(economicalBowler(test_data),expected);

});
it('economicalBowler should return Array',function () {  

    assert.isArray(economicalBowler([[],[]]));
});

}); 
