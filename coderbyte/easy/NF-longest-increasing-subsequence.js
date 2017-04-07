// Have the function LongestIncreasingSequence(arr) take the array of positive
// integers stored in arr and return the length of the longest increasing
// subsequence (LIS). A LIS is a subset of the original list where the numbers
// are in sorted order, from lowest to highest, and are in increasing order. The
// sequence does not need to be contiguous or unique, and there can be several
// different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a
// possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your
// program should return 3 because that is the length of the longest increasing
// subsequence.

// By: Aulia Hakiem
// Test Case Point: 4
// Kesalahan: Fungsi ini hanya membuat LIS secara berurutan tanpa bisa melewatkan
// angka besar yang menyebabkan panjang sekuen menjadi terbatas

function LongestIncreasingSequence(arr) {
  var panjang=[];
  // loop hingga panjang array sama dengan 1
  while(arr.length>1) {
    // state awal dari sequence
    var lis=[arr[0]];
    var pendek=lis[0];
    // looping dengan cari anggota sequence selanjutnya yang harus lebih besar
    for(var i=0;i<arr.length;i++) {
      if(pendek<arr[i]) {
        lis.push(arr[i]);
        // ganti nilai terpendek dengan anggota baru tersebut
        pendek=arr[i];
      }
    }
    // cari panjang dari lis
    panjang.push(lis.length)
    // hapus anggota pertama dari array untuk loop selanjutnya
    arr.splice(0,1);
  }
  panjang.sort(function(a,b){return b-a});
  return panjang[0];
}

// keep this function call here
LongestIncreasingSequence(readline());
