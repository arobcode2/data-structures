
// Instantiate a new graph
var Graph = function() {
  this.edges = {};
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Boolean(this.nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (var key in this.edges) {
    if (key.includes(node)) {
      delete this.edges[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var key = nameEdge(fromNode, toNode);
  return Boolean(this.edges[key]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!(this.contains(fromNode) && this.contains(toNode))) return;
  var key = nameEdge(fromNode, toNode);
  this.edges[key] = [fromNode, toNode];
  
  var altKey = nameEdge(toNode, fromNode);
  this.edges[altKey] = [toNode, fromNode];
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var key = nameEdge(fromNode, toNode);
  delete this.edges[key];

  var altKey = nameEdge(toNode, fromNode);
  delete this.edges[altKey]; 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};


function nameEdge(fromNode, toNode) {
  var fN = fromNode.toString();
  var tN = toNode.toString();
  return "(" + fN + "," + tN + ")";
}
/*
 * Complexity: What is the time complexity of the above functions?
 */


