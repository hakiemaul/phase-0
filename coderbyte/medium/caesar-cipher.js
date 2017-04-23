// Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

// By: Aulia Hakiem
// Test Case Point: 5

"use strict"
function CaesarCipher(str,num) {
  let arr=[];
  let kode=0;
  for(let i=0;i<str.length;i++) {
    kode=str.charCodeAt(i);
    let baru=0;
    if((kode>=65 && kode<=90) || (kode>=97 && kode<=122)) {
      baru=kode+num;
      if(baru>90 && baru<97) baru=64+(baru-90);
      if(baru>122) baru=96+(baru-122);
      arr.push(String.fromCharCode(baru));
    } else {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

// keep this function call here
CaesarCipher(readline());
