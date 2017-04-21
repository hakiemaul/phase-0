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
  var faktor2=0;
  console.log(bin)
  //mencari kuadrat dari dua yang terdekat dari panjang string bin (mencari yang lebih besar)
  for(var i=3;i<7;i++) {
    if(Math.pow(2,i)>=bin.length) {
      faktor2=Math.pow(2,i);
      break;
    }
  }
  //menambahkan angka nol didepan bin hingga panjang bin menjadi sepanjang bilangan kuadrat dari dua tersebut
  while(bin.length<faktor2) {
    bin='0'+bin;
  }
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
console.log(BinaryReversal("15487793"));
