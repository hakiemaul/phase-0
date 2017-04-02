// Have the function LetterCapitalize(str) take the str parameter being passed
// and capitalize the first letter of each word. Words will be separated by only
// one space.

// By: Aulia Hakiem
// Test Case Point: 5

function LetterCapitalize(str) {
  //konversi string ke array dan huruf kecil
  var arrKecil=str.toLowerCase().split(' ');
  for (var i=0;i<arrKecil.length;i++) {
    //diubah lagi menjadi array tiap huruf dari tiap kata
    var kata=arrKecil[i].split('');
    for (var j=0; j < kata.length; j++) {
      //mengkapitalkan huruf pertama
      kata[0]=kata[0].toUpperCase();
    }
    //dikembalikan menjadi array per huruf
    arrKecil[i]=kata.join('');
  }
  return arrKecil.join(' ');
}

// keep this function call here
LetterCapitalize(readline());
