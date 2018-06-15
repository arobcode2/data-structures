var BinarySearchTree = function(value){
  var obj = Object.create(bstMethods);
  obj.value = value;
  obj.left = false
  obj.right = false
  return obj;
}


var bstMethods = {}

bstMethods.insert = function(value) {
   if (this.value === value){
     return; 
   } else if (value > this.value){
     if (this.right !== false) {
       this.right.insert(value);
     } else {
     this.right = BinarySearchTree(value);
     }  
   } else if (value < this.value){
     if (this.left !== false) {
       this.left.insert(value);
     } else {
     this.left = BinarySearchTree(value);
     }
   }
}
bstMethods.contains = function(value) {
  if (this.value === value) return true
  return ( (this.left !==false) && this.left.contains(value) || (this.right !== false ) && this.right.contains(value));
  
}
bstMethods.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
}




















// class BinarySearchTree = {

//   constructor (value){
//     this.value = value;
//   }

//   insert(value){
//     this.value = value
//   }

//   contains(value){
//     if (!this.left) return
//     if (!this.right) return
//     return ((this.value === value) || this.left.contains(value) || this.right.contains(value));
//   }

//   depthFirstLog(callback){
//     callback(this.value);
//     this.left.depthFirstLog(callback);
//     this.right.depthFirstLog(callback);
//   }

// };

// BinarySearchTree.prototype.insert = function(value) {
// debugger;
//    if(value === this.value){
//      return;
//    } else if ( value > this.value ){
//      if (!this.right.value){
//        this.right = new BinarySearchTree(value);
//      } else {
//        this.right.insert(value);
//      }
//    } else if (value < this.value){
//      if  (!this.left.value) {
//        this.left = new BinarySearchTree(value);
//      } else {
//        this.left.insert(value);
//      }
//    }
// };
// BinarySearchTree.prototype.contains = function(value) {
//   return ((this.value===value ) || (this.left && this.left.contains(value)) || (this.right && this.right.contains(value)));
// };
// BinarySearchTree.prototype.depthFirstLog = function(callback) {
//   callback(this.value);
//   this.left.depthFirstLog(callback);
//   this.right.depthFirstLog(callback);
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */
