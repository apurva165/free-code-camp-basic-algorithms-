
function titleCase(str) {
 var a = str.split(' ');
 var b = [];
  for (var i =0 ; i<a.length; i++){
    b.push((a[i][0].toUpperCase())+a[i].substring(1).toLowerCase());
  }
   return b.toString().replace(/,/g,' ');
}

titleCase("I'm a little tea pot");
