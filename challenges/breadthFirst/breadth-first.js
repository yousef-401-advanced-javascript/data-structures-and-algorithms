'use strict';
const Graph = require('../dataStructure/graphs/graphs');
const newGraph = new Graph();

class Vertex{
  constructor(value){
    this.value = value;
  }
}

function breadthFirst(startNode) {
  const arr = []; 
  const traversedNode = new Set(); 
  
  arr.push(startNode);
  traversedNode.add(startNode);

  //   console.log(traversedNode);

  while (arr.length) {
    const currentNode = arr.shift();
    // console.log('currentNode',currentNode);
    const neighbors = newGraph.getNeighbors(currentNode);
    // console.log('neighbors',neighbors);
        
    for (let neighbor of neighbors) {
      // console.log('neighbor',neighbor)
      const neighborNode = neighbor.vertex;
      if(traversedNode.has(neighborNode)) {
        continue;
      } else {
        traversedNode.add(neighborNode);
      }
      arr.push(neighborNode);
    }

  }

  console.log({ traversedNode});
    
  return traversedNode;


}
// const graph = new Graph();
const ten = new Vertex(10);
const tne = new Vertex(10);

const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
newGraph.addNode(ten);
newGraph.addNode(two);
newGraph.addNode(six);
newGraph.addNode(seven);
newGraph.addNode(three);
newGraph.addNode(eight);
newGraph.addNode(tne);

newGraph.addEdge(ten, two);
newGraph.addEdge(ten, six);
newGraph.addEdge(ten, three);
newGraph.addEdge(ten, seven);
newGraph.addEdge(two, seven);
newGraph.addEdge(six, seven);
newGraph.addEdge(six, eight);
newGraph.addEdge(three, seven);
newGraph.addEdge(eight, three);
newGraph.addEdge(seven, tne);


breadthFirst(ten);