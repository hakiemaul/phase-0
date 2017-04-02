// Have the function SimpleMode(arr) take the array of numbers stored in arr
// and return the number that appears most frequently (the mode). For example:
// if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more
// than one mode return the one that appeared in the array first (ie.
// [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is
// no mode return -1. The array will not be empty.

// By: Aulia Hakiem
// Test Case Point: 5

function SimpleMode(arr) {
  var sama=[];
  for(var i=0;i<arr.length;i++) {
    sama[i]=0;
    //mencari nilai elemen yang sama
    for(var j=i+1;j<arr.length;j++) {
      if(arr[i]==arr[j]) {
       sama[i]++;
      }
    }
  }
  //mencari indeks dari elemen dengan jumlah terbanyak
  var maxInd = sama.indexOf(Math.max(...sama));
  sama.sort(function(a,b){return b-a})
  if(sama[0]>0) return arr[maxInd]; else return -1;
}

// keep this function call here
SimpleMode(readline());
