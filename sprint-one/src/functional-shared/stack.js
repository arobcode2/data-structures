//debugger;

// Wanna use this extend function bu' somethang is broken, so we did it manually. sorrrryyyyyy******
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
  someInstance.counter = 0;
  someInstance.storage = {};
  //extend(someInstance, stackMethods);
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {};

  stackMethods.push = function (string){
    this.storage[this.counter] = string;
    this.counter ++;
  };
  stackMethods.pop = function (){
    if (this.counter > 0){
      this.counter --;
      return this.storage[this.counter];
    }
  };
  stackMethods.size = function (){
    return this.counter;
  };


