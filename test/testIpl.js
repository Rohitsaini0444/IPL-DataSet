/* const assert= require('chai').assert;
const ipl= require('../ipl.js');


describe('matches function',function () { 
        let matches = ipl.matches;
    it('matches should be a function',function(){
        assert.isFunction(matches);

    });

    it('matches function should return expected result for tested data ',function(){

        let test_data = [{},{}];
        let expected = {};
        let dummy_data = [{
            'year':'2016'
           
        },{
            'year':'2017',
        },{
            'year':'2016',
        }];
        let result = {'2016':'2','2017':'1'};
        let result2 = {'2016':'2','2017':'1'};

        assert.deepEqual(matches(test_data),expected);
         
        assert.deepEqual(matches(result2),result);

    });
    it('matches shold return object',function () {  

        assert.isObject(matches([{},{}]));
    });

 }); */
 const assert=require('chai').assert;
 const app=require('../ipl.js');
 var result=app.matches();
describe("No Of Matches  played by teams in  ipl" ,function(){
    it("it should be a function", function(){
        assert.isFunction(matches);

    });
} );