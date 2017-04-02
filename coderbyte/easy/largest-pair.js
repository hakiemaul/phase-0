// Have the function LargestPair(num) take the num parameter being passed and
// determine the largest double digit number within the whole number. For example:
// if num is 4759472 then your program should return 94 because that is the
// largest double digit number. The input will always contain at least two
// positive digits.

// By: Aulia Hakiem
// Test Case Point: 5

function LargestPair(num) {
  //konversi num jadi string
  var string=num.toString().split('')
  var arrDobel=[];
  //penjumlahan elemen dengan pasangannya
  for (var i=0;i<string.length-1;i++) {
    arrDobel[i]=string[i]+string[i+1];
    arrDobel[i]=parseInt(arrDobel[i])
  }
  //looping mencari pasangan elemen terbesar
  var terbesar=arrDobel[0];
  for(var j=0;j<arrDobel.length;j++) {
    if(arrDobel[j]>terbesar) {
      terbesar=arrDobel[j];
    }
  }
  return terbesar;
}

// keep this function call here
LargestPair(readline());
