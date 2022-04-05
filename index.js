class Stack {
  constructor() {
    this.stack = [];
  }
  
  get length() {
    return this.stack.length;
  }
  
  push(item) {
    return this.stack.push(item);
  }
  
  pop() {
    return this.stack.pop();
  }
  
  peek() {
    return this.stack[this.length - 1];
  }



}
  
const stack = new Stack();
  
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack);
console.log(stack.length);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
stack.push('duck');
console.log(stack);
stack.push('horse');
stack.push('cat');
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);



class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    // return this.queue.pop();
    return this.queue.shift();
  }

  hasNext() {
    return !!this.queue.length;
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
queue.enqueue('llama');
console.log(queue);
console.log(queue.dequeue());
console.log(queue.hasNext());
console.log(queue.dequeue());
console.log(queue.hasNext());
console.log(queue);
console.log(queue.dequeue());
