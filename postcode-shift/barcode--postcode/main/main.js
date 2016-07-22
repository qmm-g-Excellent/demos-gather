'use strict';
function printPostcode(barcode, nativeBarcode, digitsArray) {
    let str = checkBarcode(barcode);
    if (str === 'true') {
        let barcodeObj = removeCheckCode(barcode, nativeBarcode);
        let postcodeObj = getPostcode(barcodeObj, nativeBarcode);
        postcodeObj = checkPostcode(postcodeObj, digitsArray,nativeBarcode);
        console.log(postcodeObj.str === '条码的校验码正确' ? addSymbol(postcodeObj): postcodeObj.str);
       return  postcodeObj.str === '条码的校验码正确' ? addSymbol(postcodeObj): postcodeObj.str;
    }
    else {
        return str;
    }
}

function checkBarcode(barcode) {
    let barcodeArr = barcode.split('');

    let newBarcodeArr = barcodeArr.filter(code => code === ':' || '|');
    return newBarcodeArr.join("") === barcode ? 'true' : '条码有非法字符';
}

function removeCheckCode(barcode, nativeBarcode) {
    let cd = barcode.substring(barcode.length - 1 - nativeBarcode[0].length, barcode.length - 1);
    console.log(cd);
    let barcodeArr = barcode.split('');
    let length = barcodeArr.length - 1 - nativeBarcode[0].length - 1;
    barcodeArr.splice(0, 1);
    barcodeArr.splice(length, nativeBarcode[0].length + 1);
    return {barcode: barcodeArr.join(""), cd: cd};
}

function getPostcode(barcodeObj, nativeBarcode) {
    // let barcodeArr = barcodeObj.barcode.split("").map(code => {
    //     let index = barcodeObj.barcode.split("").indexOf(code);
    //     return code.substring(index.indexOf(code), index.indexOf(code) + nativeBarcode[0].length).join("");
    // });
    let barcode = barcodeObj.barcode.split('');
    let barcodeArr = [];
    for (let i = 0; i < barcode.length; i++) {
        let length = nativeBarcode[0].length;
        // console.log(barcode.slice(i, i + length).join(""));
        barcodeArr.push(barcode.slice(i, i + length).join(""));
        i += length -1;
    }
    let postcode = barcodeArr.map(barcode => {
      return  nativeBarcode.indexOf(nativeBarcode.find(barcodeStr => barcodeStr === barcode));
        // console.log(nativeBarcode.indexOf(nativeBarcode.find(barcodeStr => barcodeStr === barcode)));
    }).join('');
    let cd = barcodeObj.cd;
    return {postcode, cd};
}

function checkPostcode(postcodeObj, digitsArray,nativeBarcode) {
    let digits = digitsArray.some(digit => digit === postcodeObj.postcode.length);
    // console.log(digits ? 'true' : '邮编位数不正确');
    postcodeObj.str = digits ? 'true' : '邮编位数不正确';
    // console.log(postcodeObj.postcode);
    let sum = postcodeObj.postcode.split('').reduce((prv, cur) => parseInt(prv) + parseInt(cur));
    
    let cd = sum % 10 === 0 ? 0 : 10 - sum % 10;
    postcodeObj.str = nativeBarcode.find(barcode => cd === nativeBarcode.indexOf(barcode)) === postcodeObj.cd ? '条码的校验码正确' : '条码的校验码不正确';
    // console.log(nativeBarcode.find(barcode => cd === nativeBarcode.indexOf(barcode)) );
    return postcodeObj;
}

function addSymbol(postcodeObj){
  // console.log(postcodeObj.barcode);
    
    let postcode;
    if(postcodeObj.postcode.split('').length - 1 > 5 ){
        postcode = postcodeObj.postcode.split('');
        postcode.splice(5,0,"-");

    }
    let a = ['2','4','5'];
    a.splice(1,0,'wowo');
    console.log(postcode.join(""));

    return postcode.join("");
}

module.exports = {
    printPostcode: printPostcode,
    checkBarcode: checkBarcode,
    removeCheckCode: removeCheckCode,
    getPostcode: getPostcode,
    checkPostcode: checkPostcode
}