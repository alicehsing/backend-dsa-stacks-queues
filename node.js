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



class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    console.log('NODE VALUE: ', node.value, this.value, node.value < this.value);

    if(node.value < this.value) {
      this.left ? this.left.add(node) : this.left = node;  
    } else {
      this.right ? this.right.add(node) : this.right = node;
    }
  }

}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

console.log(B);


class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }
  
  add(node) {
    if(node.value < this.value) {
      this.left ? this.left.add(node) : this.left = node;
    } else {
      this.right ? this.right.add(node) : this.right = node;
    }
  }

  //   findPerson(name) {
  //     // is it me you are looking for?
  //     if(this.value === name) return this.person;

  //     // which direction to go?
  //     const direction = node.value < this.value ? 'left' : 'right';

  //     //out of nodes, doesn't exist, return null
  //     if(!this[direction]) return null;
    
  //     // delegate to the left or right
  //     return this[direction].findPerson(name);
        
//   }
}


const Ba = new PersonTreeNode({
  name: 'cathy',
  phone: '503-000-3333',
  address: '123 abc st'
});

const Aa = new PersonTreeNode({
  name: 'jack',
  phone: '503-000-3332',
  address: '120 abc st'
});

const Ca = new PersonTreeNode({
  name: 'polly',
  phone: '503-000-3335',
  address: '127 abc st'
});

const Da = new PersonTreeNode({
  name: 'nick',
  phone: '503-000-3331',
  address: '121 abc st'
});

Ba.add(Aa);
Ba.add(Da);
Ba.add(Ca);
// Ba.findPerson('jack');


console.log(JSON.stringify(Ba, true, 2));
