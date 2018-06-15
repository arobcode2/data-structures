/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

// var somePrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]

// var pushPseudoPrime = function (bits,list){
//   var myPseudoPrime = Math.floor(Math.random * Math.pow(2,bits))
//   var keepGoing = true
//   var checkPseudoPrime = function () {
//     var isPseudoPrime = true;
//     for (var i = 0; i < somePrimes.length; i++){
//       if (myPrime % somePrimes[i] === 0){
//         isPseudoPrime = false;
//       } 
//     }
//     return isPrime;
//   }
//   var whittleDowner = function(){
//     if(!keepGoing){
//       list.push(myPseudoPrime);
//       return 
//     } else {
//      myPseudoPrime --;
//      keepGoing = !checkPseudoPrime();
//      whittleDowner();  
//     }
//   }
// }

// var pseudoPrimeList = []
// var shuffleList = [1,2,3,4]

// var buildPrimeList = function(bits, length){
//   for (var i = 0 ; i < length; i++){
//     pushPseudoPrime(bits, pseudoPrimeList);
//   };
// };

// var stringHasher9000 = function(str, max, pseudoPrimes, indexes){
// //indexes is a list of possible indexes that you want to move over in step n-1 of the hash loop
// //pseudoPrimes must be generated independantly and kept as a contant to maintain function consistency from run to run
// //str is passed in string
// //max is the total number of indexes in the hash table to be used;
//   var hash = 0
//   for (var i = 0; i < str.length; i++) {
//     var asciiOne = str.getCharCodeAt(i);
//     var asciiTwo = str.getCharCodeAt(str.length - i);
//     var primeI = pseudoPrimes[i];
//     var primeAsciiOne = pseudoPrimes[asciiOne];
//     var primeAsciiTwo = pseudoPrimes[asciiTwo];
//     var subHash = 0;
//     var shuffleSpot = i % 4
//     subHash += asciiOne;
//     subHash = subHash << 8;
//     subHash += asciiTwo;
//     subHash *= primeI;
//     subHash = subHash & subHash;
//     subHash *= primeAsciiOne;
//     subHash = hash ^ subHash;
//     subHash *= primeAsciiTwo;
//     subHash = subHash & subHash;
//     subHash = ~subHash
//     hash += subHash
//     hash = hash << shuffleSpot;
//     subHash = subHash ^ hash
//   }
//   return hash % max;
// }
// /*
//  * Complexity: What is the time complexity of the above functions?
//  */



















































