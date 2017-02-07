
function palindrome(str) {
  // Good luck!
  
  var str1 = str.replace(/[\W_]/g,'').toLowerCase();
  
  var str2 = str1.split('').reverse().join('');
  
  return  str1===str2;
}

palindrome("eye");