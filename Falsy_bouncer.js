
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(arrayFilter);
}

var arrayFilter= function(value){
  if( Boolean(value))
    return true;
  return false;
};

bouncer([7, "ate", "", false, 9]);
