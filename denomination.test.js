const fun = require('./denomination');

describe("test denomination", () => {
  test("normal use case", () => {
    let notes = [2000, 500, 200, 100, 50, 10, 5, 2, 1];
    let amount = 253;
    let myOutput = fun.denomination(notes, amount);
    let output = 4;
    expect(myOutput).toEqual(output);
  })

  test("Exact match", () => {
    let notes = [2000, 500, 200, 100, 50, 10, 5, 2, 1];
    let amount = 2000;
    let myOutput = fun.denomination(notes, amount);
    let output = 1;
    expect(myOutput).toEqual(output);
  })

  test("Amount is in fraction", () => {
    let notes = [2000, 500, 200, 100, 50, 10, 5, 2, 1];
    let amount = 20.10;
    let myOutput = fun.denomination(notes, amount);
    let output = -1;
    expect(myOutput).toEqual(output);
  })
})