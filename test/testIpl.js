const assert= require('chai').assert;
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
            '2016':1
        },{
            '2017':1
        },{
            '2016':1
        }]
        let result = {'2016':2,'2017':1};

        assert.deepEqual(matches(test_data),expected)
         
        assert.deepEqual(matches(dummy_data),result)

    });
    it('matches shold return object',function () {  

        assert.isObject(matches([{},{}]));
    });

 });