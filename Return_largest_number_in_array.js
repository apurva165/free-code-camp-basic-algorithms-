function largestOfFour(arr) {
  // You can do this!
  var a =[];
  
  for (var i=0 ;i<arr.length;i++){
    var maxlen =  arr[i][0];
    for(var j =0 ;j<arr[i].length;j++){
      if(maxlen <= arr[i][j]){
        maxlen = arr[i][j];
      }
    }
    a.push(maxlen);
  }
  
  
  return a;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
