// Have the function BitwiseOne(strArr) take the array of strings stored in
// strArr, which will only contain two strings of equal length that represent
// binary numbers, and return a final binary string that performed the bitwise
// OR operation on both strings. A bitwise OR operation places a 0 in the new
// string where there are zeroes in both binary strings, otherwise it places a
// 1 in that spot. For example: if strArr is ["1001", "0100"] then your program
// should return the string "1101"

// By: Aulia Hakiem
// Test Case Point: 5

function BitwiseOne(strArr) {
  var jumlah=[];
  for(var i=0;i<strArr[0].length;i++) {
    //cek kondisi string 1 dan 2 dalam indeks yang sama, sesuaikan nilainya
    if(strArr[0][i]==strArr[1][i]) {
      if(strArr[0][i]=='1') {
        jumlah[i]='1';
      } else
        jumlah[i]='0';
    } else if(strArr[0][i]=='1' || strArr[1][i]=='1') {
        jumlah[i]='1';
      } else {
        jumlah[i]='0';
    }
  }
  jumlah=jumlah.join('')
  return jumlah;
}


// keep this function call here
BitwiseOne(readline());
