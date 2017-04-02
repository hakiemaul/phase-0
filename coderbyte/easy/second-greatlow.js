// Have the function SecondGreatLow(arr) take the array of numbers stored in arr
// and return the second lowest and second greatest numbers, respectively,
// separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
// output should be 12 98. The array will not be empty and will contain at least
// 2 numbers. It can get tricky if there's just two numbers!

// By: Aulia Hakiem
// Test Case Point: 5

function SecondGreatLow(arr) {
  //urutkan array
  arr.sort(function(a,b) {return a-b });
  var besar=0;
  var kecil=0;
  //parameter default
  besar=arr[arr.length-2];
  kecil=arr[1];
  //looping dan cari kondisi dimana terdapat bilangan terbesar/terkecil yang
  //berulang, sesuaikan dengan soal
  for(var i=2;i<arr.length;i++) {
    if(besar==arr[arr.length-1]){
      besar=arr[arr.length-(i+1)];
    } else if(kecil==arr[0]){
      kecil=arr[i];
    }
  }
  return kecil + ' ' + besar;
}

// keep this function call here
SecondGreatLow(readline());
