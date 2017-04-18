// Have the function AdditivePersistence(num) take the num parameter being passed
// which will always be a positive integer and return its additive persistence
// which is the number of times you must add the digits in num until you reach
// a single digit. For example: if num is 2718 then your program should return
// 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

// By: Aulia Hakiem
// Test Case Point: 5

function AdditivePersistence(num) {
  // ubah menjadi string
  var strNum=num.toString();
  var hitung=0;
  // iterasi hingga panjang string = 1
  while(strNum.length>1) {
    var jumlah=0;
    // penjumlahan setiap angka di dalam string
    for(var i=0;i<strNum.length;i++) {
      jumlah+=Number(strNum[i]);
    }
    // ubah hasil penjumlahan menjadi string
    strNum=jumlah.toString();
    // hitung tiap iterasi
    hitung++;
  }
  return hitung;
}

// keep this function call here
AdditivePersistence(readline());
