const Node = require("../lib/node");

describe("create list", () => {
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
});

describe("delete node from list", () => {
	// Add tests for the delete method
	test("return the list without the deleted node", () => {
		const node1 = new Node(1);
		const node2 = new Node(1,2);
		const node3 = new Node(1,3);
		let list = [node1, node2, node3];
		const head = new Node();
		expect(head.delete(list, node1).toString()).toStrictEqual("1, 2,1, 3");
});
});

describe("reverse list", () => {
	// Add tests for the reverse method
	test("return the reversed list", () => {
		const node1 = new Node(1,1);
		const node2 = new Node(1,2);
		const node3 = new Node(1,3);
		let list = [node1, node2, node3];
		const head = new Node();
		//as we understood, we need to reverse the nodes
		//so revList should be [node3, node2, node1]
		expect(head.reverse(list).toString()).toStrictEqual("1, 3,1, 2,1, 1")
	})
});
