'use strict';

let printBarcode = require('../main/main');

describe('checkPostcode', () => {
    let input = '45056-1234';
    let digitsArray = [5, 9, 10];
    let nativeBarcode = [
        {digit: 1, barcode: ':::||'},
        {digit: 2, barcode: '::|:|'},
        {digit: 3, barcode: '::||:'},
        {digit: 4, barcode: ':|::|'},
        {digit: 5, barcode: ':|:|:'},
        {digit: 6, barcode: ':||::'},
        {digit: 7, barcode: '|:::|'},
        {digit: 8, barcode: '|::|:'},
        {digit: 9, barcode: '|:|::'},
        {digit: 0, barcode: '||:::'}
    ];

    it('check postcode', () => {
        const postcode = printBarcode.checkPostcode(input, digitsArray);
        const expectPostcode = { postcode: '45056-1234', str: 'true' };
        expect(postcode).toEqual(expectPostcode);
    });

    it('get check postcode', () => {
        const postcode = {postcode: '45056-1234', str: true};
        const objPostcode = printBarcode.getCheckCode(postcode);

        const expectObjPostcode = { postcode: '45056-1234', str: true, cd: 0 };
        expect(objPostcode).toEqual(expectObjPostcode);
    });

    it('get barcode', () => {
        const postcode = {postcode: '45056-1234', str: 'true', cd: 0};
        const barcode = printBarcode.getBarcode(postcode, nativeBarcode);
        const expectBarcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

        expect(barcode).toEqual(expectBarcode);
    });

    it('get end barcode', () => {
        const barcode = printBarcode.printBarcode(input, nativeBarcode, digitsArray);
        const expectBarcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
                              // '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'
        expect(barcode).toEqual(expectBarcode);
    });

});