// Have the function ProductDigits(num) take the num parameter being passed which
// will be a positive integer, and determine the least amount of digits you need
// to multiply to produce it. For example: if num is 24 then you can multiply
// 8 by 3 which produces 24, so your program should return 2 because there is a
// total of only 2 digits that are needed. Another example: if num is 90, you can
// multiply 10 * 9, so in this case your program should output 3 because you
// cannot reach 90 without using a total of 3 digits in your multiplication.

// By: Aulia Hakiem
// Test Case Point: 5

function ProductDigits(num) {
  var pengali=0;
  var faktor=0;
  var jumlahDigit=[];
  for(var i=0;i<num;i++) {
    //cek kondisi apakah num bisa habis dibagi angka i, hitung jumlah digit
    if(num%i===0) {
      pengali=i;
      faktor=num/i;
      jumlahDigit[i]=pengali.toString().length + faktor.toString().length;
    } else {
      pengali=1;
      faktor=num;
      jumlahDigit[i]=pengali.toString().length + faktor.toString().length;
    }
  }
  //diurutkan dari yang terkecil, ambil yang terkecil
  jumlahDigit.sort();
  return jumlahDigit[0];
}

// keep this function call here
ProductDigits(readline());
