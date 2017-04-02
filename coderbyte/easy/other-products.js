// Have the function OtherProducts(arr) take the array of numbers stored in arr
// and return a new list of the products of all the other numbers in the array
// for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array,
// where each location in the new array is the product of all other elements,
// is [120, 60, 40, 30, 24]. The following calculations were performed to get
// this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You
// should generate this new array and then return the numbers as a string joined
// by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and
// at least 1 element of only positive integers.

// By: Aulia Hakiem
// Test Case Point: 5

function OtherProducts(arr) {
  var arrBaru = [];
    for(var i=0;i<arr.length;i++) {
        var hasilKali=1;
        for (var j=0; j<arr.length; j++) {
          //menghitung hasil kali tiap bagian dari array
          hasilKali = hasilKali * arr[j];
      }
      //menghitung hasil kali jika dibagi dengan elemen array
      arrBaru[i]=hasilKali/arr[i];
    }
  //konversi array jadi string(sesuai permintaan soal)
  arrBaru=arrBaru.join('-');
  return arrBaru;
}

// keep this function call here
OtherProducts(readline());
