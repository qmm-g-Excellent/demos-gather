 function findOdds(tags){
    const odds = [];
    return  odds.map(odd =>{return tags.find(tag => tag/2 === 1)});
     // console.log(odds);
 }
 
 module.exports = findOdds;