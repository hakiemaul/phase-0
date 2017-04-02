// Have the function OverlappingRanges(arr) take the array of numbers stored in
// arr which will contain 5 positive integers, the first two representing a range
// of numbers (a to b), the next 2 also representing another range of integers
// (c to d), and a final 5th element (x) which will also be a positive integer,
// and return the string true if both sets of ranges overlap by at least x
// numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should
// return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10
// and the second range of numbers are 2, 3, 4, 5, 6. The last element in the
// array is 3, and there are 3 numbers that overlap between both ranges:
// 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your
// program should return the string false.

// By: Aulia Hakiem
// Test Case Point: 5

function OverlappingRanges(arr) {
  var arr1=[];
  var arr2=[];
  //mengisi array 1 dan array 2, tetapi masih dimulai dari 0
  for(var i=arr[0];i<=arr[1];i++) {
    arr1[i]=i;
  }
  for(i=arr[2];i<=arr[3];i++) {
    arr2[i]=i;
  }
  //menghapus elemen array yang tidak sesuai dengan kondisi soal
  arr1.splice(0,arr[0]);
  arr2.splice(0,arr[2]);
  var cocok=0;
  //cari nilai elemen yang cocok pada kedua array, tambahkan nilai variabel
  //cocok jika sesuai
  for(i=0;i<arr1.length;i++) {
    for(var j=0;j<arr2.length;j++) {
      if(arr1[i]===arr2[j]) cocok++;
    }
  }
  //cek kondisi nilai kecocokan dengan kondisi dalam array asal
  if(cocok>=arr[4]) {
    return true;
  } else {
    return false;
  }
}

// keep this function call here
OverlappingRanges(readline());
