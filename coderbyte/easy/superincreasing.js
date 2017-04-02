// Have the function Superincreasing(arr) take the array of numbers stored in
// arr and determine if the array forms a superincreasing sequence where each
// element in the array is greater than the sum of all previous elements. The
// array will only consist of positive integers. For example: if arr is
// [1, 3, 6, 13, 54] then your program should return the string "true" because
// it forms a superincreasing sequence. If a superincreasing sequence isn't
// formed, then your program should return the string "false"

// By: Aulia Hakiem
// Test Case Point: 5

function Superincreasing(arr) {
  var benar=0;
  for(var i=1;i<arr.length;i++) {
    var jumlah=0;
    //cari jumlah hingga indeks ke i
    for(var j=0;j<i;j++) {
      jumlah=jumlah+arr[j];
    }
    //cek kondisi dalam setiap iterasi
    if(arr[i]>jumlah) {
      benar++;
    }
  }
  //cek kondisi dari array
  if(arr.length-1===benar) return true; else return false;
}

// keep this function call here
Superincreasing(readline());
