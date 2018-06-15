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

  list.addAfterNode = function(insertLoc, value) {
debugger;
    if (list.head) {
      var someNode = list.head;
      while(list.tail !== someNode) {
        if (someNode.value === insertLoc) {
          var tempNodeStorage = someNode.next;
          var newNode = Node(value);
          someNode.next = newNode;
          newNode.next = tempNodeStorage;
          return;
        } else {
          someNode = someNode.next;
        }
      }
      if (list.tail.value === insertLoc) {
        var newNode = Node(value);
        list.tail.next = newNode;
        list.tail = newNode;
      } else {
        console.log('Insert location does not exist!');
      }
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
