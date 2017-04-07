// Have the function ClosestEnemy(arr) take the array of numbers stored in arr
// and from the position in the array where a 1 is, return the number of spaces
// either left or right you must move to reach an enemy which is represented by
// a 2. For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should
// return 3 because the closest enemy (2) is 3 spaces away from the 1. The array
// will contain any number of 0's and 2's, but only a single 1. It may not
// contain any 2's at all as well, where in that case your program should return
// a 0.

// By: Aulia Hakiem
// Test Case Point: 5

function ClosestEnemy(arr) {
  var ind;
  var indEnemy=[];
  for(var i=0; i<arr.length;i++) {
    // cari indeks dari angka 1
    if(arr[i]==1) ind=i;
    // cari indeks dari tiap angka 2
    if(arr[i]==2) indEnemy.push(i);
  }
  var jarak=[];
  for(i=0;i<indEnemy.length;i++) {
    // hitung jarak indeks angka 1 dengan tiap angka 2
    jarak[i]=Math.abs(ind-indEnemy[i])
  }
  jarak.sort(function(a,b) {return a-b})
  // kembalikan jarak terdekat
  if(jarak[0]===undefined) return 0; else return jarak[0];
}

// keep this function call here
ClosestEnemy(readline());
