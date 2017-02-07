
function factorialize(num) {
  if (num <= 1){
    return 1;
  } 
  var sum = 1;
  for (var i =2; i<=num ; i++){
    sum = sum*i;
  }
  
  return sum ;
}

factorialize(5);
