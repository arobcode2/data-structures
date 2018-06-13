var Stack = function() {
  var someInstance = {};
  someInstance.counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[this.counter] = value;
    this.counter ++;
  };

  someInstance.pop = function() {
    this.counter --;
    return storage[this.counter];
  };

  someInstance.size = function() {
    return this.counter;
  };

  return someInstance;
};
