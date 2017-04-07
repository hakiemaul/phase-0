// Have the function AlphabetSearching(str) take the str parameter being passed
// and return the string true if every single letter of the English alphabet
// exists in the string, otherwise return the string false. For example: if str
// is "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then your program should return the
// string true because every character in the alphabet exists in this string
// even though some characters appear more than once. Use the Parameter Testing
// feature in the box below to test your code with different arguments.

// By: Aulia Hakiem
// Test Case Point: 5

function AlphabetSearching(str) {
  // buat objek mapping tiap huruf
  var letMapping={};
  for(var i=0;i<str.length;i++) {
    // case jika belum ada huruf tersebut sebelumnya
    if(letMapping[str[i]]===undefined){
      letMapping[str[i]]=0;
    }
      letMapping[str[i]]+=1;
  }
  var mungkin=0;
  for(i=97;i<=122;i++) {
    // jika ada salah satu huruf yg tidak terdapat dalam string, akan dikembalikan false
    if(letMapping[String.fromCharCode(i)]===undefined) {
       return false;
    }
  }
  return true;
}

// keep this function call here
AlphabetSearching(readline());
