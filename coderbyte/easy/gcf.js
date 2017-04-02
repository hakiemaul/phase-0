// Have the function GCF(arr) take the array of numbers stored in arr which
// will always contain only two positive integers, and return the greatest
// common factor of them. For example: if arr is [45, 12] then your program
// should return 3. There will always be two elements in the array and they
// will be positive integers.

// By: Aulia Hakiem
// Test Case Point: 5

function GCF(arr) {
  var faktor=[];
  if(arr[0]<arr[1]) {
    //mencari faktor kedua angka dengan modulus hingga nilai terbesar
    for(var i=1;i<=arr[0];i++) {
      if(arr[0]%i===0 && arr[1]%i===0) {
        faktor[i]=i;
      }
    }
  } else if(arr[0]>arr[1]) {
    //mencari faktor kedua angka dengan modulus hingga nilai terbesar
    for(var j=1;j<=arr[1];j++) {
      if(arr[0]%j===0 && arr[1]%j===0) {
        faktor[j]=j;
      }
    }
  } else if(arr[0]==arr[1]) {
    //jika dua angka bernilai sama, faktornya adalah angka tersebut
    faktor[0]=arr[0];
  }
  //urutkan dari yang terbesar, kembalikan nilai tersebut
  faktor.sort(function(a,b){return b-a});
  return faktor[0];
}

// keep this function call here
GCF(readline());
