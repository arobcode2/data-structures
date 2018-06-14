var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item)) return;
    this._storage.push(item);
    this.size++;
};

setPrototype.contains = function(item) {
  var bool = false;
  
  for (var i = 0; i <= this.size; i++) {
    if (this._storage[i] === item) {
      bool = true
      return bool;
    }
  }
  return bool;
};

setPrototype.remove = function(item) {
  if (this.size > 0) {
    for (var i = 0; i < this.size; i++) {
      if (this._storage[i] === item) {
        this._storage.splice(i, 1);
        this.size--;   
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
