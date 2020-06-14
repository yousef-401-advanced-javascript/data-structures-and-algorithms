'use strict';

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
}

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




