// Have the function ABCheck(str) take the str parameter being passed and return
// the string true if the characters a and b are separated by exactly 3 places
// anywhere in the string at least once (ie. "lane borrowed" would result in
// true because there is exactly three characters between a and b). Otherwise
// return the string false.

// By: Aulia Hakiem
// Test Case Point: 5

function ABCheck(str) {
  //buat regex sesuai dengan kondisi soal
  var regex1=/a...b/;
  var regex2=/b...a/;
  //tes apakah kondisi regex terpenuhi
  if(regex1.test(str) || regex2.test(str)) return true; else return false
}

// keep this function call here
ABCheck(readline());
