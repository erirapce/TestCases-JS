// Implement your test cases for gradingScale.min.js here.

const GradingScale = require("../lib/gradingScale.min")

describe("Points", () => {
  test("p is not number", () => {
    p = "not a number";
    const scale = new GradingScale();
    expect("Grades are expected to be of type number but at least one was of type "+typeof p);
  });

  test(" p is smaller than 0", () => {
    p = -2;
    const scale = new GradingScale();
    expect("Grades must be > 0");
  });

  test("should fail because p is greater than 100, but it is successful. There is an error in the code of gradingScale.min", () => {
    //this line of code must be put in line 17 of gradingScale.min to remove the error
    //if(p>100)throw"Grades must be < 100";
    p = 200;
    const scale = new GradingScale();
    expect(scale.addPoints(p)) == [p];
  });

  test(" SUCCESSFUL", () => {
    p = 2;
    const scale = new GradingScale();
    expect(scale.addPoints(p)) == [p];
  });
});



  describe("PointsToLetter", () => {
    // the first 3 tests are similar to the first 3 for the class Points
    test(" p is not number ", () => {
      p = "not a number";
      const scale = new GradingScale();
      expect("Grades are expected to be of type number but at least one was of type "+typeof p);
    });

    test("p is smaller than 0", () => {
      p = -2;
      const scale = new GradingScale();
      expect("Grades must be > 0");
    });

    test("should fail because p is greater than 100, but it is successful. There is an error in the code of gradingScale.min", () => {
      //this line of code must be put in line 23 of gradingScale.min to remove the error
      //if(p>100)throw"Grades must be < 100";
      p = 200;
      const scale = new GradingScale();
      expect(scale.pointsToLetter(200)).toString("B");
    });

    test("60 ponts are equivalent to the letter-grade C", () => {
      p = 60;
      const scale = new GradingScale();
      expect(scale.pointsToLetter(p)).toString("C");
    })
  });
