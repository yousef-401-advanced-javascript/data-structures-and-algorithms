'use strict';
const linkedList = require('../linked-list.js').ll;
// const Node = require('../linked-list.js').node;
let first = new linkedList;
let second = new linkedList;
first.append(3);
first.append(3);
first.append(3);
first.append(3);
first.append(3);
first.append(3);
console.log(first.append(3));
second.append(9);
second.append(9);
second.append(9);
second.append(9);
second.append(9);
second.append(9);
console.log(second.append(9));
//////////the code\\\\\\\\\\\\\
function mergeLists(first, second){
  let counter = 1;
  const llAfterMerging = new linkedList;
  let currentFirst = first.head;
  let currentSecond = second.head;
  while(currentSecond !== null){
    if(counter%2){
      llAfterMerging.append(currentFirst.value);
      currentFirst = currentFirst.next;
      counter++;
    }
    else{
      llAfterMerging.append(currentSecond.value);
      currentSecond = currentSecond.next;
      counter++;
    }
  }
  return llAfterMerging;

}
console.log(mergeLists(first,second).toString());
