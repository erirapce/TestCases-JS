/*
Credits:
Based on "Node" by Prof. Kleinen (27.11.2014)
available at https://github.com/htw-imi-info3/lab-04-testing/blob/master/b_test_driven/java/NodeTDDEclipse/src/list/Node.java
*/

class Node {
	#next;
	#data;

	constructor(data, next) {
		this.#data = data;
		if(next) this.#next = next;
	}

	get next() {
		return this.#next;
	}

	// implement delete
	delete(list, node) {
    for(let i=0; i< list.length; i++){

      if(i == list.indexOf(node)){
      list.splice(i,1);
      }
    }
    return list;
  }

	// implement reverse
	reverse(list){
    let revList = [];
    for(let i=0; i< list.length; i++){
      revList.unshift(list[i]);
    }
    return revList;//[node3, node2, node1]
  }
	

	toString() {
		if(!this.#data) return "";
		if(!this.#next) return this.#data.toString();
		return this.#data.toString() + ", " + this.#next.toString();
	}

	static fromString(string) {
		const content = string.split(",");
		let result;
		let i;
		for(i = content.length - 1; i >= 0; i--) {
			result = new Node(content[i].trim(), result);
		}
		return result;
	}
}

module.exports = Node;
