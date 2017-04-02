// Have the function AlphabetSoup(str) take the str string parameter being passed
// and return the string with the letters in alphabetical order (ie. hello
// becomes ehllo). Assume numbers and punctuation symbols will not be included
// in the string.

// By: Aulia Hakiem
// Test Case Point: 5

function AlphabetSoup(str) {
  var tampung=[];
  //ubah menjadi array
  for(var i=0;i<str.length;i++) {
      tampung[i]=str[i];
  }
  //urutkan array secara alphabetical
  tampung.sort();
  tampung=tampung.join('');
  return tampung;
}

// keep this function call here
AlphabetSoup(readline());
