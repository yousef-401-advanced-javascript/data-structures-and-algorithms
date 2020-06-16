'use strict';
const BinaryTree = require('../tree/tree').BT;



class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


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
console.log(JSON.stringify(tree));

function FizzBuzzTree (treeNodes){
//   console.log(treeNodes);
  if(!treeNodes){
    return null;
  }

  let newNode = new Node();
  switch (true) {

  case treeNodes.value%3 === 0 && treeNodes.value%5 === 0 : 
    newNode.value = 'FizzBuzz';
    break;  

  case treeNodes.value%3 === 0 :
    newNode.value = 'Fizz';
    break;

  case treeNodes.value%5 === 0 : 
    newNode.value = 'Buzz';
    break;

  default: 
    newNode.value =`${treeNodes.value}`;
    break;
    
  }
  newNode.left = FizzBuzzTree(treeNodes.left);
  newNode.right = FizzBuzzTree(treeNodes.right);

  return newNode;
}
console.log('----------------------------------------------------------------------------');
console.log(JSON.stringify(FizzBuzzTree(tree.root)));