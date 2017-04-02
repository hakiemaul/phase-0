// Have the function NumberSearch(str) take the str parameter, search for all the
// numbers in the string, add them together, then return that final number. For
// example: if str is "88Hello 3World!" the output should be 91. You will have
// to differentiate between single digit numbers and multiple digit numbers like
// in the example above. So "55Hello" and "5Hello 5" should return two different
// answers. Each string will contain at least one letter or symbol.

// By: Aulia Hakiem
// Test Case Point: 5

function NumberAddition(str) {
  var regex=/[0-9]+/g;
  //mencocokkan string dengan kondisi regex
  var arrAngka=str.match(regex);
  var jumlah=0;
  //cek kondisi jika tidak ada angka dalam string
  if(arrAngka===null) return 0;
  //looping penghitungan jumlah
  for(var i=0;i<arrAngka.length;i++) {
    jumlah+=Number(arrAngka[i]);
  }
  return jumlah;
}

// keep this function call here
NumberAddition(readline());
