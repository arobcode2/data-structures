var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};
someInstance.length = 0;
someInstance.pointer = 0;
someInstance.storage = {};
_.extend(someInstance, queueMethods);
return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  this.storage[this.pointer + this.length] = string;
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
  return this.length
};