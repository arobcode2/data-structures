var Tree = function(value) {
  var newTree = {};
  _.extend(newTree,treeMethods);
  newTree.value = value;
  newTree.children = []; 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var myChildTree = Tree(value);
  this.children.push(myChildTree);
};

treeMethods.contains = function(target) {
  var doesContain = false
  var hasTarget = function (tree) {
    if (tree.value === target){
      doesContain = true
      return doesContain
    } else {
    //pop down to a each child
    //check if child has the value we want if it does, set Does containt to true, and return it//
    //else pop down ...
    for (var i = tree.children.length - 1; i >= 0; i--) {
      hasTarget(tree.children[i])
    }
    }
  }
  hasTarget(this)
  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
