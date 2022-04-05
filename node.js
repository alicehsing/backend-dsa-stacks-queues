// Create a new class object to construct LinkedListNode
class LinkedListNode {

  // Define the properties of 'this' class
  constructor(data) {
    this.data = data;
    // another instance of LinkedListNode
    this.next = null;
  }
  // Allow users to 'add' nodes to the list via add method
  add(node) {
    // ternary statement asks: is there a next property?
    // if yes, delegate to the the current "next" node
    // if not, this "node" can be our next
    this.next ? this.next.add(node) : this.next = node;
  }

  // Allow users to fetch each code in the list by geList method
  getList() { 
    // ternary statement asks: is there a next property?
    // if yes, return a list of data value in order
    // if no, return the data value for this node.
    return this.next ? this.data + ', ' + this.next.getList() : this.data;
  } 
  
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
root.add(new LinkedListNode('C'));
console.log(root.getList()); 
