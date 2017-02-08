
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var array =[] ;
  for (var i=0; i<arr.length/size; i++){
    array.push(arr.slice(i*size,i*size+size));
  }
  return array;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);