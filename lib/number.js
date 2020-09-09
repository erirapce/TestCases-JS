/*
Credits:
Based on "Absolute" by Prof. Kleinen (07.10.2014)
available at https://github.com/htw-imi-info3/lab-04-testing/blob/master/a_black_and_white_box_tests/absolute.java
*/

class Number {
	static getAbsolute(x) {
		return (x < 0) ? -x : x; // Error found: was x < -1 before
	}
}

module.exports = Number;
