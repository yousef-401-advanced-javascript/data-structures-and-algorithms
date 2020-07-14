'use strict';
const Graph = require('../dataStructure/graphs/graphs');
const newGraph = new Graph();

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

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

newGraph.addEdge(ten, two, 1);
newGraph.addEdge(ten, six, 2);
newGraph.addEdge(ten, three, 3);
newGraph.addEdge(ten, seven, 4);
newGraph.addEdge(two, seven, 5);
newGraph.addEdge(six, seven, 6);
newGraph.addEdge(six, eight, 7);
newGraph.addEdge(three, seven, 8);
newGraph.addEdge(eight, three, 9);
newGraph.addEdge(seven, tne, 10);


function getEdge(graph, array) {

  let neighrbor = graph.getNeighbors(array[0]);
  for (let i = 0; i < neighrbor.length; i++) {
    if (array[1] === neighrbor[i].vertex) {
      return `True, ${neighrbor[i].weight}$`;
    }
  }
  return `False, 0$`;

}

getEdge(newGraph, [10, 7]);