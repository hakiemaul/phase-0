// Have the function HammingDistance(strArr) take the array of strings stored in
// strArr, which will only contain two strings of equal length and return the
// Hamming distance between them. The Hamming distance is the number of
// positions where the corresponding characters are different. For example: if
// strArr is ["coder", "codec"] then your program should return 1. The string
// will always be of equal length and will only contain lowercase characters
// from the alphabet and numbers.

// By: Aulia Hakiem
// Test Case Point: 5

function HammingDistance(strArr) {
  var jumlah=0;
  for(var i=0;i<strArr[0].length;i++) {
    //cari tiap kondisi ketika nilai string 1 dan 2 tidak sama
    if(strArr[0][i]!==strArr[1][i]) {
      jumlah++;
    }
  }
  return jumlah;
}

// keep this function call here
HammingDistance(readline());
