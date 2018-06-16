
var hamilton = [[0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],   
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],  
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], 
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                ];
var k7 = [
[0,1,1,1,1,1,1],
[0,0,1,1,1,1,1],
[0,0,0,1,1,1,1],
[0,0,0,0,1,1,1],
[0,0,0,0,0,1,1],
[0,0,0,0,0,0,1],
[0,0,0,0,0,0,0] ]

var newMatrix = [
[0,1,0,1],
[0,0,1,1],
[0,0,0,0],
[0,0,0,0]]

var matrices = [hamilton, k7, newMatrix]

var fillInBottom = function (matrix){
  for (var i = 0; i<matrix.length; i++){
    for (var j = 0 ; j < matrix[i].length; j++){
      if(matrix[i][j] === 1){
        matrix[j][i] = matrix[i][j]
      }
    }
  }
  return matrix;
}

var convertToAdjacencyListTXT = function(matrix){
  var out = ""
  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j< matrix[i].length; j++){
      if (matrix[i][j] === 1 && out.length !== 0){
        out += "\n(" + (i + 1) + "," + (j + 1) + ")"
      } else if (matrix[i][j] === 1){
        out += "(" + (i + 1) + "," + (j + 1) + ")"
      }
    }
  }
  return out
}


var convertFromAdjacencyListTXTtoArray = function(string){
  var out = []
  var arr = string.split("\n")
  for (var k = 0 ; k < arr.length ; k ++){
    var pair = arr[k].slice(1,arr[k].length - 1)
    pair = pair.split(",")
   for (var g = 0 ; g < pair.length; g++){
     pair[g] = Number(pair[g]);
   }
   out.push(pair);
  }
  return out;
}
var getNodesInAdjacencyListArr = function(array){
  var allNodes = new Set()
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array[i].length; j++){
      allNodes.add(array[i][j])
    }
  }
  return allNodes;
}
var countNodesInAdjacencyListArr = function(arr){
  var set = getNodesInAdjacencyListArr(arr);
  return set.size;
}

var getNodesInAdjacencyListTXT = function(string){
  var arr = convertFromAdjacencyListTXTtoArray(string);
  return getNodesInAdjacencyListArr(arr);
}

var countNodesInAdjacencyListTXT = function(string){
  var set = getNodesInAdjacencyListTXT(string)
  return set.size;
};

var generateMatrixFromAdjacencyListArr = function(adjListArr){
  debugger;
  var maxI = countNodesInAdjacencyListArr(adjListArr);
  var row = Array(maxI).fill(0);
  var matrix = Array(maxI).fill(row);

  for (var edgeIndex = 0; edgeIndex < adjListArr.length; edgeIndex ++ ){
    matrix[adjListArr[edgeIndex][0]][adjListArr[edgeIndex][1]] = 1
  };
  return matrix;
}