// Have the function ChangingSequence(arr) take the array of numbers stored in
// arr and return the index at which the numbers stop increasing and begin
// decreasing or stop decreasing and begin increasing. For example: if arr is
// [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last
// point in the array where the numbers were increasing and the next number begins
// a decreasing sequence. The array will contain at least 3 numbers and it may
// contains only a single sequence, increasing or decreasing. If there is only a
// single sequence in the array, then your program should return -1. Indexing
// should begin with 0.

// By: Aulia Hakiem
// Test Case Point: 5

function ChangingSequence(arr) {
  var naik=[];
  var turun=[];
  for(var i=1;i<arr.length;i++) {
    //penetapan nilai parameter naik dan turun sesuai dengan kondisi array
    if(arr[i]>arr[i-1]) {
      naik[i]=1;
      turun[i]=0;
    } else if(arr[i]<arr[i-1]) {
      naik[i]=0;
      turun[i]=1;
    }
    //cek kondisi jika ada perubahan pola di dalam array
    if(naik[i]<naik[i-1]||turun[i]<turun[i-1]) {
      return i-1;
    }
  }
  //jika tidak ada dikembalikan -1
  return -1;
}

// keep this function call here
ChangingSequence(readline());
