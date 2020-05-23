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
    if (!theNewValue){
      try {
        throw new SyntaxError('you should put an arrgument');
      } catch (e) {
        console.error(e.name,e.message); // you should put an arrgument
      }
    }

    let node = new Node(theNewValue);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    node.next = this.head;
    this.head = node;
    currentNode = this.head;
    console.log(this);
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
module.exports = new LinkedList;

let hi = new LinkedList();
// console.log(hi.includes(1));

// hi.insert(1222);
// hi.insert();
// hi.insert(3);
// hi.insert(4);
// hi.insert(5);
// console.log(hi.includes(1));
// console.log(hi.includes(10));
// console.log(hi.includes(14));
// console.log(hi.includes(4));
// console.log(hi.toString());



