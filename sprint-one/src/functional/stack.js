var Stack = function() {
  var someInstance = {};
  someInstance.counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.counter] = value;
    someInstance.counter ++;
  };

  someInstance.pop = function() {
    if ( someInstance.counter > 0){
      someInstance.counter --;
      return storage[someInstance.counter];
    }
  };

  someInstance.size = function() {
    return someInstance.counter;
  };

  return someInstance;
};
