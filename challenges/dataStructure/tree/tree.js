'use strict';
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
      return 'Exception';
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    if(!this.front){
      this.rare = null;
    }
    this.storage = this.front;//some thing weird
    return temp.value;
  }
  peek(){
    return this.front&&this.front.value||'Exception';
  }
  isEmpty(){
    return !this.front;
  }


}
///////////////////---------------TREES------------\\\\\\\\\\\\\\\\\\\\

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  inOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }
  postOrder() {
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
  breadthFirst() {///its the same psodeu code in  the reading but its not work 
    const finalResults = [];
    const breadth = new Queue();
    breadth.enqueue(this.root);
    console.log(breadth.front);
    while (breadth.peek()) {
      // console.log(breadth.peek());
      // console.log(breadth);

      const front = breadth.dequeue();
      finalResults.push(front.val);

      if (front.left) {
        breadth.enqueue(front.left);
      }

      if (front.right) {
        breadth.enqueue(front.right);
      }
    }

    return finalResults;
  }

}
///////////////////-------------Binary search tree---------------\\\\\\\\\\\\\\\\\\\\\\\\\
class BinarySearchTree{
  constructor(root=null){
    this.root=root;
  }
  add(newValue){
    let node = new Node(newValue);
    if (!this.root){
      this.root = node;
    }
    const _traversal = (treeNode) => {
      //left
      if(treeNode.value>node.value){
        if(treeNode.left ===null){
          treeNode.left = node;
        }
        _traversal(treeNode.left);
        //right
      }else if(treeNode.value<node.value){
        if(treeNode.right ===null){
          treeNode.right = node;
        }
        _traversal(treeNode.right);
      }else{return `its equal to ${treeNode.value}`;}
    };
    _traversal(this.root);
  }
  contains(value){
    let booleanValue = false;

    if (!this.root){
      return false;
    }
    const _traversal = (treeNode) => {
      //left
      if (treeNode)
      { if(treeNode.value>value){
        // if(treeNode.left ===null){
        //   treeNode.left = value;
        // }
        _traversal(treeNode.left);
        //right
      }else if(treeNode.value<value){
        // if(treeNode.right ===null){
        //   treeNode.right = value;
        // }
        _traversal(treeNode.right);
      }else{booleanValue = true;}}
    };
    _traversal(this.root);
    return booleanValue;
  }
 
}
module.exports ={
  BST:BinarySearchTree,
  BT:BinaryTree,
};
const one = new Node(15);
const two = new Node(3);
const three = new Node(6);
const four = new Node('dsd');
const five = new Node(5);
const six = new Node(75);
const seven = new Node(12);
const eight = new Node(25);
const nine = new Node(9);
one.left = two;
one.right = three;
three.right = four;
three.left = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
let tree = new BinaryTree(one);
console.log(tree.breadthFirst());
// let tree = new BinarySearchTree();
// tree.add(10);
// tree.add(12);
// tree.add(4);
// tree.add(15);
// tree.add(6);
// tree.add(3);
// tree.add(1);
// tree.add(19);
// tree.add(7);
// tree.add(11);

// console.log(JSON.stringify(tree));
// console.log(tree.root.right);
// console.log(tree.contains(11));
// console.log(tree.contains(101));
// console.log(tree.contains(1));
// console.log(tree.contains(12));
// console.log(tree.contains(200));




