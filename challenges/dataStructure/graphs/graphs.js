'use strict';
class Vertex{
  constructor(value){
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
    this.counter = 0;
  }
  addNode(vertex){
    this.adjacencyList.set(vertex, []);
    this.counter++;
  }
  addEdge(startVertex, endVertex, weight){
    if(!this.adjacencyList.has(startVertex)||!this.adjacencyList.has(endVertex)){
      console.log('not found');
    }else{
      const adjacencies = this.adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }
  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return this.adjacencyList.get(vertex);
    }
  }
  getNodes() {
    // console.log(this.adjacencyList.entries());
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      
      console.log('V>>>> ', vertex);
      console.log('E>>>>', edge);
    }
  }
  size() {
    console.log('the size:', this.counter, 'node/s');
    return this.counter;
  }
}

const graph = new Graph();
const ten = new Vertex(10);
const tne = new Vertex(10);

const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
graph.addNode(ten);
graph.addNode(two);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(three);
graph.addNode(eight);
graph.addNode(tne);

graph.addEdge(ten, two);
graph.addEdge(ten, six);
graph.addEdge(ten, three);
graph.addEdge(ten, seven);
graph.addEdge(two, seven);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(three, seven);
graph.addEdge(eight, three);
graph.addEdge(seven, tne);

// graph.getNodes();
graph.size();
// console.log('NEIGHBORS', graph.adjacencyList);