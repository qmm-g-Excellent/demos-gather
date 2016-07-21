 
var oddSquareAdd = require('../main/main');


describe('printSquareSum', function(){
    var tags = [1,2,3,4,5,6,7,8,9,10];
     
    it('get adds array',function(){
        var numArray = [1,2,3,4,5,6,7,8,9,10];
        var odds = oddSquareAdd.findOdds(numArray);
        var expectOdds = [1,3,5,7,9];
        expect(odds).toEqual(expectOdds);
    });
    
    it('get addSquare' ,function(){
        var odds = [1,3,5,7,9];
        var oddSquare = oddSquareAdd.countSquare(odds);
        var expectOddSquare = [1,9,25,49,81];
        expect(oddSquare).toEqual(expectOddSquare);
    });
    
    it('get squareSum', function (){
        var oddSquare =  [1,9,25,49,81];
        var squareSum = oddSquareAdd.addSum(oddSquare);
        expectSquareSum = 165;
        expect(squareSum).toEqual(expectSquareSum);
    });
    
    it('get squareSum',function(){
            spyOn(console, 'log');
        oddSquareAdd.printSquareSum(tags);
        var expectSquareSum =  165;
        expect(console.log).toHaveBeenCalledWith(expectSquareSum);
    })
});