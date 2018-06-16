var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item)) return;
    this._storage[item] = item
    this.size++;
};

setPrototype.contains = function(item) {
  return (this._storage[item] === item)  
};

setPrototype.remove = function(item) {
  if (this.size > 0) {
    if(this.contains(item)){
      delete this._storage[item]; 
      this.size --;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// _storagege = { item1 : item1, item2: item2, ...}
