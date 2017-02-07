
function findLongestWord(str) {
  var a = str.split(' ');
  var maxlen= 0;
  for (var i=0 ; i <a.length ;i++){
   if ( a[i].length > maxlen){
    
     maxlen = a[i].length;
   }
    
  }
  return maxlen;
}

findLongestWord("The quick brown fox jumped over");

