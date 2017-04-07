// Have the function TwoSum(arr) take the array of integers stored in arr, and
// determine if any two numbers (excluding the first element) in the array can
// sum up to the first element in the array. For example: if arr is
// [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the
// number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with
// the numbers separated by a comma, in the order the first number appears in
// the array. Pairs should be separated by a space. So for the example above,
// your program would return: 5,2 -4,11

// If there are no two numbers that sum to the first element in the array, return -1

// By: Aulia Hakiem
// Test Case Point: 5

function TwoSum(arr) {
  var hasil=[];
  for(var i=1;i<arr.length;i++) {
    for(var j=i+1;j<arr.length;j++) {
      // cari pasangan yg menghasilkan angka pada index 0
      if(arr[i]+arr[j]==arr[0]) {
        // push angka pada index i dan j kedalam array hasil
        hasil.push(''+arr[i]+','+arr[j]);
      }
    }
  }
  // jika tidak ada hasil, kembalikan nilai -1
  if(hasil.join(' ')==='') return -1; else return hasil.join(' ');
}

// keep this function call here
TwoSum(readline());
