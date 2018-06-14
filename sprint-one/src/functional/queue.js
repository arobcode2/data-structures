var Queue = function() {
  var someInstance = {};
  someInstance.length = 0;
  someInstance.pointer = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.length + someInstance.pointer] = value;
    someInstance.length ++;
  };

  someInstance.dequeue = function() {
    if (someInstance.length > 0) {
      someInstance.pointer ++;
      someInstance.length --;
      return storage[someInstance.pointer - 1];
    }
  };

  someInstance.size = function() {
    return someInstance.length;
  };

  return someInstance;
};
