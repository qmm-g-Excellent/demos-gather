

function printSquareSum(tags){
    const odds = findOdds(tags);
    const oddSquare = countSquare(odds);
    const squareSum = addSum(oddSquare);
    console.log(squareSum);
}

function findOdds(tags){
    return  tags.filter(tag => tag % 2 === 1);
}

function countSquare(odds){
    return odds.map(odd => odd * odd);
}

function addSum(addSquare){
    return addSquare.reduce((a,b) => {return a+b});
}

module.exports  = {
    printSquareSum:printSquareSum,
    findOdds:findOdds,
    countSquare:countSquare,
    addSum:addSum
};


