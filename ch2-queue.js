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