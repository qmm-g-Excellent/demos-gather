'use strict';
let printPostcode = require('../main/main');

describe('get postcode', () => {
    let input = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    let nativeBarcode = ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
    let digitsArray = [5, 9, 10];

    it('checkBarcode', () => {
        const barcode = printPostcode.checkBarcode(input);
        const expectStr= 'true';
        expect(barcode).toBe(expectStr);
    });

    it('removeCheckCode', () => {
        const barcode ='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        const objBarcode = printPostcode.removeCheckCode(barcode,nativeBarcode);

        const expectObjBarcode = { barcode: ':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|', cd: '||:::' };
        expect(objBarcode).toEqual(expectObjBarcode);
    });

    it('getPostcode', () => {
        const barcodeObj = { barcode: ':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|',cd: '||:::' };
        const postcode = printPostcode.getPostcode(barcodeObj, nativeBarcode);
        const expectPostcode = {postcode: '450561234', cd: '||:::'};
        expect(postcode).toEqual(expectPostcode);
    });

    it('checkPostcode', () => {
        const postcodeObj = {postcode: '450561234', cd: '||:::'};
        const postcode = printPostcode.checkPostcode(postcodeObj,digitsArray,nativeBarcode);
        const expectPostcode ={ postcode: '450561234', cd: '||:::', str: '条码的校验码正确' };
        expect(postcode).toEqual(expectPostcode);
    });


    it('printPostcode', ()=> {
        const postcode = printPostcode.printPostcode(input,nativeBarcode,digitsArray);
        const expectPostcode = '45056-1234';
        expect(postcode).toBe(expectPostcode);
    })

});