// Have the function LongestWord(sen) take the sen parameter being passed and
// return the largest word in the string. If there are two or more words that are
// the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

// By: Aulia Hakiem
// Test Case Point: 5

function LongestWord(sen) {
  var arr=sen.split(' ');
  var arrHuruf=[];
  //regex agar setiap kata yang terdiri dari angka dan huruf
  for(var i=0;i<arr.length;i++) {
    arrHuruf[i]=arr[i].match(/[\w\d]+/gi);
    arrHuruf[i]=arrHuruf[i].toString();
  }
  var terpanjang=arrHuruf[0]
  //cari kata terpanjang dari array
  for(i=0;i<arrHuruf.length;i++) {
    if(arrHuruf[i].length<terpanjang.length || terpanjang.length==arrHuruf[i].length) {
      terpanjang=terpanjang;
    } else {
      terpanjang=arrHuruf[i];
    }
  }
  return terpanjang;
}

// keep this function call here
LongestWord(readline());
