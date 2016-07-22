 'use strict';
var printSquareSum= require('../main/main');


describe('printSquareSum', function(){
    let number = [1,2,3,4,5,6,7,8,9,10];
     

    it('get squareSum',function(){
        spyOn(console,'log');
        printSquareSum(number);
        var expectSquareSum =  165;
        expect(console.log).toHaveBeenCalledWith(expectSquareSum);
    })
});