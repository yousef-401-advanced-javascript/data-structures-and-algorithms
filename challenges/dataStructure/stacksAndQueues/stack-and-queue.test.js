'use strict';
const Stack = require('./stacks-and-queues.js').stack;
const Queue = require('./stacks-and-queues.js').queue;


describe('Stack methods', ()=>{

  it('push onto a stack', ()=>{
    let stack = new Stack();
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });
  it('push multiple times',()=>{
    let stack = new Stack();
    stack.push(10);
    stack.push(1);
    stack.push(4);
    expect(stack.peek()).toEqual(4);
  });
  it('can not pop if the stack is empty',()=>{
    let stack = new Stack();
    expect(stack.pop()).toEqual('Exception');

  });
  
  it('pop form Stack', ()=>{
    let stack = new Stack();
    stack.push(8);
    stack.push(5);
    stack.push(4);
    stack.pop();
    expect(stack.peek()).toEqual(5);
  });
  it('returns and remove the top item', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('instantiate an empty stack&& pop or peek on empty stack', () => {
    const stack = new Stack();
    expect(stack.top).toEqual(null);
    expect(stack.pop()).toEqual('Exception');
    expect(stack.peek()).toEqual('Exception');
  });

});
////////////--------------Queue Test----------\\\\\\\\\\\\\\\
describe('Queue methods', ()=>{

  it('enqueue onto a queue', ()=>{
    let queue = new Queue();
    queue.enqueue(2);
    expect(queue.peek()).toEqual(2);
  });
  it('enqueue multiple times',()=>{
    let queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(1);
    queue.enqueue(4);
    expect(queue.peek()).toEqual(10);
  });
  it('can not dequeue if the queue is empty',()=>{
    let queue = new Queue();
    expect(queue.dequeue()).toEqual('Exception');
  
  });
    
  it('pop form Stack', ()=>{
    let queue = new Queue();
    queue.enqueue(8);
    queue.enqueue(5);
    queue.enqueue(4);
    queue.dequeue();
    expect(queue.peek()).toEqual(5);
  });
  it('returns and remove the top item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.isEmpty()).toBeTruthy();
  });
  it('instantiate an empty stack&& pop or peek on empty stack', () => {
    const queue = new Queue();
    expect(queue.front).toEqual(null);
    expect(queue.dequeue()).toEqual('Exception');
    expect(queue.peek()).toEqual('Exception');
  });

});