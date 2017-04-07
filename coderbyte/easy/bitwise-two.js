// Have the function BitwiseTwo(strArr) take the array of strings stored in
// strArr, which will only contain two strings of equal length that represent
// binary numbers, and return a final binary string that performed the bitwise
// AND operation on both strings. A bitwise AND operation places a 1 in the new
// string where there is a 1 in both locations in the binary strings, otherwise
// it places a 0 in that spot. For example: if strArr is ["10111", "01101"]
// then your program should return the string "00101"

// By: Aulia Hakiem
// Test Case Point: 5

function BitwiseTwo(strArr) {
  // array tampung
  var hasil=[];
  for(var i=0;i<strArr[0].length;i++) {
    // case jika sama keduanya
    if(strArr[0][i]==strArr[1][i]) {
      hasil[i]=strArr[0][i];
    }
    // case jika berbeda akan dikembalikan nilai 0
    if(strArr[0][i]!==strArr[1][i]) {
      hasil[i]='0';
    }
  }
  return hasil.join('');
}
