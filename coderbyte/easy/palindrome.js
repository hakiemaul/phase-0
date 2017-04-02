// Have the function Palindrome(str) take the str parameter being passed and
// return the string true if the parameter is a palindrome, (the string is the
// same forward as it is backward) otherwise return the string false. For
// example: "racecar" is also "racecar" backwards. Punctuation and numbers
// will not be part of the string.

// By: Aulia Hakiem
// Test Case Point: 5

function Palindrome(str) {
  var strPisah=str.split('');
  //membuat variabel pembanding dengan membalik string
  var strBaru=[];
  for (var i=0;i<str.length+1;i++) {
      strBaru[i]=str[str.length-i];
  }
  strBaru=strBaru.join('');
  //menghilangkan spasi dari string dan variabel pembanding
  str=str.replace(/\s/g, "");
  strBaru=strBaru.replace(/\s/g, "");
  //cek kondisi
  if (str==strBaru) {
      return true;
  } else {
      return false;
  }
}

// keep this function call here
Palindrome(readline());
