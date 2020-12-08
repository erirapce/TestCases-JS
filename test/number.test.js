// Implement your test cases for number.js here.

const Number = require("../lib/number");


  test("absolute value of 1 is 1", () => {
    expect(Number.getAbsolute(1)) == 1;
  });

  test("absolute value of -1 is 1", () => {
    expect(Number.getAbsolute(-1)) == 1;
  });
