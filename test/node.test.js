const Node = require("../lib/node");

test("there can be lists out of one node", () => {
	const head = new Node(1);
	expect(head.toString()).toStrictEqual("1");
});

test("there can be lists out of several nodes", () => {
	const next = new Node(2);
	const head = new Node(1, next);
	expect(head.toString()).toStrictEqual("1, 2");
});

test("a list can be created from comma separated list (string)", () => {
	const list = Node.fromString("1, 2");
	expect(list.toString()).toStrictEqual("1, 2");
	expect(list.next.toString()).toStrictEqual("2");
});

// Add tests for the delete method

// Add tests for the reverse method
