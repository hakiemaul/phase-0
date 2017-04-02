// Have the function LetterChanges(str) take the str parameter being passed and
// modify it using the following algorithm. Replace every letter in the string
// with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally
// return this modified string.

// By: Aulia Hakiem
// Test Case Point: 5

function LetterChanges(str) {
  var tampung=[];
  var kalimat=str;
  for(var i=0;i<kalimat.length;i++) {
    var kode=kalimat.charCodeAt(i);
    //cek kondisi, HARUS huruf, dicocokkan dengan kode karakter
    if((kode>=65 && kode<=90) || (kode>=97 && kode<=122)) {
      switch(kode+1) {
        //kondisi jika vowels
        case 97:
        case 101:
        case 105:
        case 111:
        case 117:
          tampung[i]=String.fromCharCode(kode+1-32);
          break;
        //kondisi yang lain
        default:
          tampung[i]=String.fromCharCode(kode+1);
      }
    //jika bukan huruf, kembalikan sesuai dengan kondisi awal
    } else {
      tampung[i]=kalimat[i];
    }
  }
  tampung=tampung.join('');
  return tampung;
}

LetterChanges(readline());
