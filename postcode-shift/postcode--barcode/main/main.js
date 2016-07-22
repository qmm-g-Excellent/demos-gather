'use strict';
function printBarcode(postcode, nativeBarcode, digitsArray) {

    let postcodeObj = checkPostcode(postcode, digitsArray);
    if (postcodeObj.str === "true") {
        postcodeObj  = getCheckCode(postcodeObj);
        return getBarcode(postcodeObj,nativeBarcode);
    }
    return false;
}

function checkPostcode(postcode, digitsArray) {
    return digitsArray.some( b => b === (postcode.length -1 )) ? {postcode: postcode, str:"true"} : {postcode: postcode, str: undefined};
}

function getCheckCode(postcodeObj) {
    let postcode = postcodeObj.postcode.replace('-','');
    let sum = postcode.split('')
                      .map(postcode=> {return parseInt(postcode)})
                      .reduce((prv, cur) => prv + cur);
    postcodeObj.cd = (sum % 10 === 0) ? 0 : (10 - sum %10);
    return postcodeObj;
}

function getBarcode(postcodeObj, nativeBarcode) {
    let postcode = postcodeObj.postcode.replace('-', '').split('');
    postcode = postcode.map(postcode=> {return parseInt(postcode)});

    const cdBarcode = nativeBarcode.find(nativeCode => nativeCode.digit === postcodeObj.cd );

   let codes = postcode.map(code => nativeBarcode.find(nativeCode => nativeCode.digit === code));

    codes.push(cdBarcode);
    // console.log(codes);

    let  strBarcode =  codes.map(code =>{console.log(code);return code.barcode } );
    // let strBarcode = [];
    // for(let code of codes){
    //  strBarcode.push(code.barcode);
    // }

    // console.log(strBarcode);


    // console.log('|' + strBarcode.join("") + '|');

    return '|' + strBarcode.join("") + '|';
}

module.exports = {
    printBarcode: printBarcode,
    getCheckCode: getCheckCode,
    checkPostcode: checkPostcode,
    getBarcode: getBarcode
}



//总结：includes()方法 适用于数组里面每个元素存放的是字符串，如果是数字类型的而数字，就不能用这个方法，而是用some() 方法
//map()一定有变量接受它的结果