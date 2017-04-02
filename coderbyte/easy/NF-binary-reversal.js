// Have the function BinaryReversal(str) take the str parameter being passed,
// which will be a positive integer, take its binary representation, reverse
// that string of bits, and then finally return the new reversed string in
// decimal form. For example: if str is "47" then the binary version of this
// integer is 00101111. Your program should reverse this binary string which
// then becomes: 11110100 and then finally return the decimal version of this
// string, which is 244.

// By: Aulia Hakiem
// Test Case Point: 2
// Dalam contoh terdapat beberapa angka 0 didepan representasi biner dari suatu
// angka, hal ini yang menyebabkan perbedaan nilai yang dihasilkan kode dibawah
// dengan test case yang diberikan

function BinaryReversal(str) {
  //konversi desimal ke biner
  var bin=Number(str).toString(2);
  var binBalik=[];
  //pembalikan elemen dalam biner
  for(var i=0;i<bin.length;i++) {
    binBalik[i]=bin[(bin.length-1-i)];
  }
  binBalik=binBalik.join('');
  //konversi biner ke desimal
  var angka=parseInt(binBalik,2);
  return angka;
}

// keep this function call here
BinaryReversal(readline());
