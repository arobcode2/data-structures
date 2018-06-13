
var extend = function (obj){
  var outputObj = {};
  for ( var i = 0 ; i < arguments.length ; i++ ){
    for ( key in arguments[i]){
      outputObj[key] = arguments[i][key];
    }
  }
};

var Stack = function() {
  var someInstance = {};
  this.counter = 0;
  this.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push : function (string){
    this.storage[this.counter] = string;
    this.counter ++;
  }
  pop  : function (){
    if (this.counter > 0){
      this.counter --;
      return this.storage[this.counter];
    }
  }
  size : function (){
    return this.counter;
  }
};


