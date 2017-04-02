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
  //buat regex sesuai kondisi soal
  var regex=/\+[a-zA-Z]\+/g;
  //cek kondisi string, BELUM SEMPURNA, CUKUP 1 PATTERN SAJA AKAN MENGEMBALIKAN
  //NILAI TRUE, perlu dipelajari kembali
  if(str[0]>=/a/ && str[0]<=/z/) {
    return false;
  } else {
    return regex.test(str);
  }
}

// keep this function call here
SimpleSymbols(readline());
