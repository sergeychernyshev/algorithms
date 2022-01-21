class Node {
  data;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

class List {
  head;

  /**
   * Finds a node with matching data and returns it if found or false if not found
   * Operates Iteratively (e.g. using a loop)
   *
   * @param {*} data data to find a matching node
   * @returns Node|false
   */

  findIterative(data) {
    // implement this method first
    let node = this.head;
    do {
      if (node.data == data) {
        return node;
      } else {
        node = node.next;
      }
    } while (node != null);
    return false;
  }

  /**
   * Same input and output as findIterative() above
   * Operates Recursively (e.g. calling itself)
   *
   * @param {*} data data to find a mathing node
   * @returns Node|false
   */
  findRecursive(data, node = this.head) {
    // implement this method second
    if (node == null) {
      return false;
    }
    if (node.data == data) {
      return node;
    } else {
      return this.findRecursive(data, node.next);
    }
  }

  add(data) {
    let node = new Node(data);

    if (this.head) {
      let lastNode = this.head;
      while (lastNode && lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    } else {
      this.head = node;
    }
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next) {
        console.log(currentNode.data, "↵");
      } else {
        console.log(currentNode.data);
      }
      currentNode = currentNode.next;
    }
  }
}

const list = new List();
list.add(1);
list.add(5);
list.add(7);
list.add(9);
list.add(1);
list.add(4);

list.print();

console.log();
console.log(7, list.findRecursive(7)); // node in the middle
//console.log(1, list.findRecursive(1)); // firs node
//console.log(4, list.findRecursive(4)); // last node
//console.log(17, list.findRecursive(17)); // no matching node
