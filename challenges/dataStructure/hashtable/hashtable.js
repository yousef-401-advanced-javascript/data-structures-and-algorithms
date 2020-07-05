'use strict';
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = null;
  }
  insert(value){
    let newNode = new Node(value);
    if (!this.head){
      this.head = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  theValues(key){
    let current = this.head;
    if (!this.head){
      return false;
    }else{
      while(current){
        // console.log(current);
        if(current.value[key]){
          return (current.value[key]);
        }
        current = current.next;
      }
    }
    
  }
}

class HashTable {
  constructor(size){
    this.size = size;
    this.storage = new Array(size);
  }
  //generate index
  hash(key){
    const sumCharCode = key.split('').reduce((acc, char)=>{
      return acc+char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 599)%this.size;
    // console.log(key, hashKey);
    return hashKey;

  }
  add(key, value){
    const theIndexAfterHashing = this.hash(key);

    if(!this.storage[theIndexAfterHashing]){
      const newLinkedList = new LinkedList();
      newLinkedList.insert({[key]:value});
      this.storage[theIndexAfterHashing] = newLinkedList;
    }else{
      this.storage[theIndexAfterHashing].insert({[key]: value});
    }
  }
  get(key){
    const theIndexAfterHashing = this.hash(key);
    return this.storage[theIndexAfterHashing] ? this.storage[theIndexAfterHashing].theValues(key) : `there is no value with key ${key}`;
  }
  contains(key){
    const theIndexAfterHashing = this.hash(key);
    return this.storage[theIndexAfterHashing] ? !!this.storage[theIndexAfterHashing].theValues(key) : false;
  }


}
module.exports = HashTable;

///////

// const hashmap = new HashTable(1024); // ==> [4000]
// hashmap.add('name', 'joh');
// hashmap.add('yousef', 'thing');
// hashmap.add('youfes', 'alshen');
// hashmap.add('jordan', 'ml');
// hashmap.add('this', 'nothing');
// console.log(hashmap.storage);
// console.log(
//   hashmap.storage[173].head.value,
//   hashmap.storage[173].head.next
// );
// console.log(hashmap.get('name'));
// console.log(hashmap.get('yousef'));
// console.log(hashmap.get('youfes'));
// console.log(hashmap.get('fjdjfh'));

// console.log(hashmap.contains('name'));
// console.log(hashmap.contains('yousef'));
// console.log(hashmap.contains('youfes'));
// console.log(hashmap.contains('youefs'));

// console.log(hashmap.contains('fjdjfh'));



