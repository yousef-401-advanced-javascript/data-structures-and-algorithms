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
  ////////////////insert at the beginning\\\\\\\\\\\\
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
    return this;
  }
  ////////////////////////include or not\\\\\\\\\\\\\\\\
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
  ///////////////////////convert the linked list to string\\\\\\\\\\\\\\\\\\\\
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
  ///////////////////////append at the end\\\\\\\\\\\\\\\\\\\\\
  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;

  }
  /////////////////////insert before\\\\\\\\\\\\\\\\\\\
  insertBefore(beforeValue, newVal){
    let node = new Node(newVal);
    if(!this.head){
      return(`the linked list is empty` );
    }
    let current = this.head;
    while(current.next !== null){
      if(current.next.value === beforeValue){
        node.next = current.next;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return (`this value ${beforeValue} is not exest in the linked list` );

  }
  ////////////////insert after\\\\\\\\\\\\\\\\\
  insertAfter(afterValue, newVal){
    let node = new Node(newVal);
    if(!this.head){
      return (`the linked list is empty` );
      
    }
    let current = this.head;
    while(current.next !== null){
      if(current.value === afterValue){
        node.next = current.next;
        current.next = node;
     
        return this;
      }
      current = current.next;
    }
    return (`this value ${afterValue} is not exest in the linked list` );
  }
}
module.exports = new LinkedList;

let hi = new LinkedList();
// console.log(hi.includes(1));
////////////////////////insert\\\\\\\\\\\\\\\\\
// hi.insert(1222);
// hi.insert();
// hi.insert(3);
// hi.insert(4);
// hi.insert(5);
// console.log(hi.toString());

//////////////////include\\\\\\\\\\\\\\\\\\\\
// console.log(hi.includes(1));
// console.log(hi.includes(10));
// console.log(hi.includes(14));
// console.log(hi.includes(4));

////////////////////appending\\\\\\\\\\\\\\
// hi.append(3);
// hi.append(4);
// hi.append(5);
// hi.append(12);
// hi.append(5);
// hi.append(11);
// hi.append(5);
// hi.append(14);
// console.log(hi.toString());
// hi.insertBefore(5,99);
// hi.insertAfter(111,190);
// hi.insertBefore(14);
// hi.insertBefore(14);
// console.log(hi.toString());








