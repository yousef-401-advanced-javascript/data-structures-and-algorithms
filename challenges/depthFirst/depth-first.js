'use strict';
const Graph = require('../dataStructure/graphs/graphs');
class Vertex{
  constructor(value){
    this.value = value;
  }
}


let graph = new Graph();
function depthFirst(startNode, visited = new Set()){
  visited.add(startNode);
  let neighborNodes = graph.getNeighbors(startNode);
  if(neighborNodes !== undefined){
    for(const neighborNode of neighborNodes){
      if(!(visited.has(neighborNode))){
        depthFirst(neighborNode.vertex, visited);
      }
    } 
  }
  return visited;
}

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);
const five = new Vertex(5);
graph.addNode(two);
graph.addNode(three);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(eight);
graph.addNode(ten);
graph.addNode(five);

graph.addEdge(two, seven);
graph.addEdge(three, eight);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(ten, two);
graph.addEdge(ten, three);
graph.addEdge(ten, six);
graph.addEdge(eight, seven);
graph.addEdge(three, seven);
graph.addEdge(three, five);



console.log(depthFirst(ten));