'use strict';
const BT = require('../dataStructure/tree/tree').BT;
const Hash = require('../dataStructure/hashtable/hashtable');



class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//for first tree
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

//second tree
const one1 = new Node(12);
const two1 = new Node(4);
const three1 = new Node(2);
const four1 = new Node('dsd');
const five1 = new Node(66);
const six1 = new Node(120);
const seven1 = new Node(11);
const eight1 = new Node(90);
const nine1 = new Node(3);
one1.left = two1;
one1.right = three1;
three1.right = four1;
three1.left = five1;
two1.left = six1;
six1.right = seven1;
seven1.left = eight1;
seven1.right = nine1;

let tree1 = new BT(one);
let tree2 = new BT(one1);

let hash = new Hash(1024);


function tree_intersection(tree1, tree2){
  let arr = [];
  let treeArr1 = tree1.preOrder();
  let treeArr2 = tree2.preOrder();
//   console.log(treeArr1, treeArr2)
  let len = treeArr1.length<treeArr2.length?treeArr2.length:treeArr1.length;
  treeArr1.forEach(value => {
    hash.add(value.toString(),value);
  });
  treeArr2.forEach(value => {
    if(hash.contains(value.toString())){
      arr.push(value);
    }
  });
  return arr;

}
console.log(tree_intersection(tree1, tree2));