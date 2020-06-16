'use strict';

 
class PseudoQueue {
  constructor(){
    this.storage = [];
  }
    
  enqueue(value){
    this.storage.push(value);
  }
    
  dequeue(){
    this.storage.shift();
    
  }
}
module.exports.newQueue = PseudoQueue;
let queue = new PseudoQueue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(7);

console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);

