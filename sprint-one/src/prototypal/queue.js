var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.length = 0;
  someInstance.pointer = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length + this.pointer] = value;
  this.length ++;
};
queueMethods.dequeue = function() {
  if (this.length > 0) {
    this.length --;
    this.pointer ++;
    return this.storage[this.pointer - 1];
  }
};
queueMethods.size = function() {
  return this.length;
};