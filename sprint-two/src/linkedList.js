var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      var someNode = Node(value);
      list.head = someNode;
      list.tail = someNode;
    } else {
      var someNode = Node(value);
      list.tail.next = someNode;
      list.tail = someNode;
    }
  };

  list.removeHead = function() {
    var output = list.head;
    list.head = output.next
    return output.value;  
  };

  list.contains = function(target) {
    if (list.head) {
      var someNode = list.head
      while (list.tail !== someNode){
        if (someNode.value === target){
          return true 
        } else {
          someNode = someNode.next 
        }
      } 
        return (list.tail.value === target);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
