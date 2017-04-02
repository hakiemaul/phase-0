// Have the function OneDecremented(num) count how many times a digit appears
// that is exactly one less than the previous digit. For example: if num is
// 5655984 then your program should return 2 because 5 appears directly after
// 6 and 8 appears directly after 9. The input will always contain at least 1
// digit. Use the Parameter Testing feature in the box below to test your code
// with different arguments.

// By: Aulia Hakiem
// Test Case Point: 5

function OneDecremented(num) {
  var str=num.toString().split('');
  //ubah string menjadi angka
  for(var i=0;i<str.length;i++) {
    str[i]=Number(str[i]);
  }
  var hitung=0;
  for(i=1;i<=str.length-1;i++) {
    //tambah hitungan jika elemen bersebelahan sama kurang dengan satu
    if(str[i]===str[i-1]-1) {
      hitung++;
    }
  }
  return hitung;
}

// keep this function call here
OneDecremented(readline());
