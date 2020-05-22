/* eslint-disable no-unused-vars */
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(theNewValue) {
    if (!theNewValue){return console.error('ERROR: you should put an arrgument');}

    let node = new Node(theNewValue);
    
    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    node.next = this.head;
    this.head = node;
    currentNode = this.head;
    return this;
  }

  includes(searchingValue) {
    let currentNode = this.head;
    while (currentNode){
      if (currentNode.value === searchingValue) {
        return true;
      }
      currentNode =currentNode.next;
    }
    return false;
  }
  toString(){
    let currentNode = this.head;
    let str = '';
    while (currentNode){
      str+=`{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    str += 'NULL';
    return str;
  }
}
module.exports = LinkedList;

let hi = new LinkedList;
console.log(hi.includes(1));

hi.insert(1222);
hi.insert(2);
hi.insert(3);
hi.insert(4);
hi.insert(5);
console.log(hi.includes(1));
console.log(hi.includes(10));
console.log(hi.includes(14));
console.log(hi.includes(4));
console.log(hi.toString());



