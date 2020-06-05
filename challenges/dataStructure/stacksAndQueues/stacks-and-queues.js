'use strict';
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.storage = null;
    this.top = null;
  }
  push(newValue){
    let node = new Node(newValue);
    node.next = this.storage;
    this.storage = node;
    this.top = this.storage.value;
    return this;
  }
  pop(){
    if (!this.storage){
      return 'Exception';
    }
    let removed = this.storage.value;
    this.storage = this.storage.next;
    this.top = this.storage&&this.storage.value||null;
    return removed;
    
  }
  peek(){
    return this.top;
  }
  isEmpty(){
    return !this.top;
  }
}

class Queue{
  constructor(){
    this.storage = null;
    this.rare = null;
    this.front = null;
  }
  enqueue(newValue){
    let node = new Node(newValue);
    if (!(this.front)){
      this.front = node;
      this.storage = node;
      this.rare = node;
      return this;
    }
    // node.next = this.storage;
    // this.storage = node;
    this.rare.next = node;
    this.rare = node;
    return this;
    
  }
  dequeue(){
    if(!this.front){
      return 'there is no data';
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    if(!this.front){
      this.rare = null;
    }
    this.storage = this.front;//some thing weerd
    return this;
  }
  peek(){
    return this.front&&this.front.value;
  }
  isEmpty(){
    return !this.front;
  }


}

module.exports = Stack;
module.exports = Queue;

let hi = new Stack();
let queue = new Queue();
// console.log(queue.enqueue(5));
// console.log(queue.enqueue(4));
// console.log(queue.enqueue(3));
// console.log('-------------');

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

// console.log(hi.isEmpty());
// hi.push(5);
// console.log(hi.peek());
// hi.push(11);
// console.log(hi.peek());
// console.log(hi.isEmpty());
// console.log(hi.pop());
// console.log(hi.isEmpty());
// console.log(hi.pop());
// console.log(hi.isEmpty());
////////-------------------------------\\\\\\\\\\\\\
console.log(queue.isEmpty());
console.log(queue.enqueue(5));
console.log(queue.peek());
console.log(queue.enqueue(11));
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());

