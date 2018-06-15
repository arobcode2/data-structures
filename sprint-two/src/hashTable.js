
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var temp = this._storage.get(index);
    var check = false;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i][0] === k) {
        temp[i] = [k, v];
        check = true;
      }
    }
    if (!check) {
  //we check to see if there's a key of k  already
  // if there is, we change the associated value v
  //else we push to the bucket
    temp.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  for (var i = 0; i < temp.length; i++) {
    if (temp[i][0] === k) {
      return temp[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get hash value
  var temp = this._storage.get(index);
  //go inside storage
  for (var i = 0; i < temp.length; i++) {
    if (temp[i][0] === k) {
      //splice (to remove) the hash table
      temp = temp.splice(i, 1);
    }
  }
  //set the value back in the hash table
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


