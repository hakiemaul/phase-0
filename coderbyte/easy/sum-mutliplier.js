// Have the function SumMultiplier(arr) take the array of numbers stored in arr
// and return the string true if any two numbers can be multiplied so that the
// answer is greater than double the sum of all the elements in the array. If
// not, return the string false. For example: if arr is
// [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42
// and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and
// 96 is greater than 84, so your program should return the string true.

// By: Aulia Hakiem
// Test Case Point: 5

function SumMultiplier(arr) {
  var jumlah=0;
  //cari jumlah tiap elemen
  for(var i=0;i<arr.length;i++) {
    jumlah+=arr[i];
  }
  var kali=[];
  //cari hasil kali dari tiap elemen dengan elemen yang lain, simpan dalam array
  for(i=0;i<arr.length;i++) {
    for(var j=0;j<arr.length;j++) {
      if(i!==j) {
        kali.push(arr[i]*arr[j]);
      }
    }
  }
  var mungkin=0;
  //cek kondisi sesuai soal
  for(i=0;i<kali.length;i++) {
    if(kali[i]>jumlah*2) {
      mungkin++;
    }
  }
  if(mungkin>0) return true; else return false;
}

// keep this function call here
SumMultiplier(readline());
