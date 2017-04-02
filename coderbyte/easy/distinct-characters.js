// Have the function DistinctCharacters(str) take the str parameter being
// passed and determine if it contains at least 10 distinct characters, if so,
// then your program should return the string true, otherwise it should return
// the string false. For example: if str is "abc123kkmmmm?" then your program
// should return the string false because this string contains only 9 distinct
// characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.

// By: Aulia Hakiem
// Test Case Point: 5

function DistinctCharacters(str) {
  var kode=[];
  //cari kode tiap karakter
  for(var i=0;i<str.length;i++) {
    kode[i]=str.charCodeAt(i)
  }
  //urutkan
  kode.sort(function(a,b){return a-b})
  var mungkin=0;
  //cari apakah ada kode berurutan yg sama
  for(i=0;i<kode.length;i++) {
    if(kode[i]!=kode[i+1]) {
      mungkin++;
    }
  }
  //cek kondisi
  if(mungkin>=10) return true; else return false;
}

// keep this function call here
DistinctCharacters(readline());
