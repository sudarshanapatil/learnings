const _ = require('lodash');
const lodash = require('./lodashFunc');

describe("test case for Chunk function", () => {
	test('if chunkSize is not specified creates array of size 1', () => {
		input = [1, 2, 3, 4];
		myOutput = lodash.chunk(input);
		output = _.chunk(input);
		expect(myOutput).toEqual(output);
	});

	test('if chunkSize is specified  and chunkSize is less than size of array then creates arrays of size n', () => {
		chunkSize = 3;
		input = [1, 2, 3, 4];
		myOutput = lodash.chunk(input, chunkSize);
		output = _.chunk(input, chunkSize);
		expect(myOutput).toEqual(output);
	});

	test('if chunkSize is specified  and chunkSize is greater than size of array then returns original array', () => {
		chunkSize = 10;
		input = [1, 2, 3, 4];
		myOutput = lodash.chunk(input, chunkSize);
		output = _.chunk(input, chunkSize);
		expect(myOutput).toEqual(output);
	});

	test('chunk size is 0', () => {
		chunkSize = 0;
		input = [1, 2, 3, 4];
		myOutput = lodash.chunk(input, chunkSize);
		output = _.chunk(input, chunkSize);
		expect(myOutput).toEqual(output);
	});

	test('chunk size is invalid parameter', () => {
		chunkSize = 'q';
		input = [1, 2, 3, 4];
		myOutput = lodash.chunk(input, chunkSize);
		output = _.chunk(input, chunkSize);
		expect(myOutput).toEqual(output);
	});

	test('invalid 1 st argument', () => {
		chunkSize = 9;
		input = 's e';
		myOutput = lodash.chunk(input, chunkSize);
		output = _.chunk(input, chunkSize);
		expect(myOutput).toEqual(output);
	});
})


describe("test zipWith function", () => {
	test('If two arrays are not of the same size', () => {
		let arr1 = [2, 3];
		let arr2 = [4];
		let func = (a, b) => { return a * b };
		myOutput = lodash.zipWith(arr1, arr2,func);
		output = _.zipWith(arr1, arr2, func);
		expect(myOutput).toEqual(output);
	})

	test('If one array arguments are not passed to the function', () => {
		let arr1 = [2, 3,4];
		let arr2 = [4];
		let arr3 = [4];
		let func = (a, b) => { return a * b };
		myOutput = lodash.zipWith(arr1, arr2,func);
		output = _.zipWith(arr1, arr2, func);
		expect(myOutput).toEqual(output);
	})

	test('If function is not passed', () => {
		let arr1 = [2, 3,4];
		let arr2 = [4];
	    myOutput = lodash.zipWith(arr1, arr2);
		output = _.zipWith(arr1, arr2);
		expect(myOutput).toEqual(output);
	})
})

