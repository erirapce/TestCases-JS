/*
Credits:
Based on "TaxTime" by Prof. Weber-Wulff (06.01.2006)
available at https://github.com/htw-imi-info3/lab-04-testing/blob/master/a_black_and_white_box_tests/TaxTime.java
*/

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to TaxTime\n");

rl.question("How much have you earned last year?", input => {
	const income = parseInt(input);
	if(income < 0) throw "Income must be positive";

	rl.question("How many members does your family have?", input => {
		const nFamilyMembers = parseInt(input);
		if(nFamilyMembers < 1) throw "A family must have at least one member";

		let tax = 0;
		if(income < 10000) tax = 0.12 * income;
		else if(income < 50000) tax = 300 + 0.24 * (income - 10000);
		else tax = 1500 + 0.26 * (income - 50000);

		let i;
		for(i = 0; i <= nFamilyMembers; i++) tax = tax - 100;

		if(tax < 0) tax = 0;

		console.log("You need to pay a tax of " + tax);

		console.log("\nThanks for using TaxTime!");
		process.exit(0);
	});
});

rl.on("close", () => {
	console.log("\nThanks for using TaxTime!");
	process.exit(0);
});
