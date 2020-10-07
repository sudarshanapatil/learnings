let magic = require('./magicalWord');

describe('All cases for different arrays', () => {
    test('Prime number array', () => {
        let prime = [37, 41, 43, 47, 53, 59, 61, 67, 71,
            73, 79, 83, 89, 97, 101,
            103, 107, 109, 113];
        let key = 50;
        myOutput = magic.makeMagicalWord(prime, key);
        output = 47;
        expect(myOutput).toEqual(output);
    })

    test('even number array', () => {
        let prime = [4, 8, 10, 34, 80, 100];
        let key = 2;
        myOutput = magic.makeMagicalWord(prime, key);
        output = 4;
        expect(myOutput).toEqual(output);
    })

    test('odd number array', () => {
        let prime = [11, 13, 59, 63];
        let key = 2;
        myOutput = magic.makeMagicalWord(prime, key);
        output = 59;
        expect(myOutput).toEqual(output);
    })


})
