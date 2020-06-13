'use strict';


class Stack {
  constructor() {
    this.stack = [];
    this.top = null;
  }
  peek() {
    return this.top;
  }
  push(item) {
    this.stack.unshift(item);
    this.top = item;
  }
  pop() {
    const item = this.stack.shift();
    this.top = this.stack[0] ? this.stack[0] : null;
    return item;
  }
}

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(newValue){
    while (this.stack1.stack.length!==0){
     
      this.stack2.stack.push(this.stack1.stack.pop());
  
    }

    this.stack1.stack.push(newValue);
    
    while(this.stack2.stack.length!==0){
      this.stack1.stack.push(this.stack2.stack.pop());
     
    }
  }
  dequeue(){
    if(this.stack1.stack.length ===0){
      return 'empty';
    }
    return this.stack1.stack.pop();
  }
}  
  

let queue = new PseudoQueue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(7);

console.log(queue.stack1.stack);

queue.dequeue();//will remove 5
queue.dequeue();//will remove 2
queue.dequeue();//will remove 1
queue.dequeue();//will remove 4

console.log(queue.stack1.stack);

