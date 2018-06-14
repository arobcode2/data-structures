class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.pointer = 0;
    this.storage = {};
  };
    
  enqueue(value) {
    this.storage[this.length + this.pointer] = value;
    this.length ++;
  };

  dequeue() {
    if (this.length > 0) {
      this.length --;
      this.pointer ++;
      return this.storage[this.pointer - 1];
    }
  };

  size() {
    return this.length;
  };
}
