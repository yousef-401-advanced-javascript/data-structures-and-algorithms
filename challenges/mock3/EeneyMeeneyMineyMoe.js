'use strict';

class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(item) {
    this.storage.push(item);
  }
  dequeue() {
    return this.storage.shift();
  }
  
  peek() {
    return this.storage[0];
  }
}
  
function EeneyMeeneyMineyMoe(arr, k){
  for (let i = 0; i<arr.length;i++){
    let newArr = new Queue();
    for (i = 0; i<k; i++){
      if (i===k-1){
        continue;
      }
      newArr.enqueue(arr[i]);
    }
  }
}
let arr = [1,2,3,4];
EeneyMeeneyMineyMoe(arr,3);



module.exports = Queue;
