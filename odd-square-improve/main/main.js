

function printSquareSum(number){
     const oddSquareSum = number.filter(number => number %2 === 1)
         .map(num => num * num )
         .reduce((prv,next) =>  prv + next );
    console.log(oddSquareSum);
}

module.exports = printSquareSum;
 
