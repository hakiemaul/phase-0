// Have the function SimpleSymbols(str) take the str parameter being passed and
// determine if it is an acceptable sequence by either returning the string true
// or false. The str parameter will be composed of + and = symbols with several
// letters between them (ie. ++d+===+c++==a) and for the string to be true each
// letter must be surrounded by a + symbol. So the string to the left would be
// false. The string will not be empty and will have at least one letter.

// By: Aulia Hakiem
// Test Case Point: 5
// Incorrect Case:  For the input "+d===+a+" your output was incorrect. The
//                  correct answer is false.

function SimpleSymbols(str) { 
  // deklarasi variabel penghitung
  var mungkin=0;
  var huruf=0;
  for(var i=0;i<str.length;i++) {
    // cari kode ASCII tiap karakter
    var kode=str.charCodeAt(i);
    if(kode>=97 && kode<=122) {
      // cek kondisi setelah dan sebelum huruf
      if(str[i-1]=='+' && str[i+1]=='+') {
        mungkin++;
      }
      huruf++;
    }
  }
  // cek apakah semua huruf diapit oleh tanda +
  if(mungkin==huruf) return true; else return false;
}

// keep this function call here
SimpleSymbols(readline());
