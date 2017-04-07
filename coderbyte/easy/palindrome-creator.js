// Have the function PalindromeCreator(str) take the str parameter being passed
// and determine if it is possible to create a palindromic string of at least 3
// characters by removing 1 or 2 characters. For example: if str is "abjchba"
// then you can remove the characters jc to produce "abhba" which is a
// palindrome. For this example your program should return the two characters
// that were removed with no delimiter and in the order they appear in the
// string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome,
// then return the string not possible. If the input string is already a
// palindrome, your program should return the string palindrome.
//
// The input will only contain lowercase alphabetic characters. Your program
// should always attempt to create the longest palindromic substring by removing
// 1 or 2 characters (see second sample test case as an example). The 2
// characters you remove do not have to be adjacent in the string.

// By: Aulia Hakiem
// Test Case Point: 5

function PalindromeCreator(str) {
  var strBaru='';
  // case sudah palindrome
  for (var i=1;i<str.length+1;i++) {
      strBaru+=str[str.length-i];
  }
  if(strBaru==str) return 'palindrome';
  // case butuh satu dihapus untuk palindrome
  for(i=1;i<2;i++) {
    for(var j=0;j<str.length;j++) {
      strBaru='';
      var baru=str;
      baru=str.replace(str[j],'');
      for (var k=1;k<baru.length+1;k++) {
        strBaru+=baru[baru.length-k];
      }
      if(strBaru==baru) return str[j];
    }
  }
  // case butuh dua dihapus untuk palindrome
  for(i=2;i<3;i++) {
    for(var j=0;j<str.length;j++) {
      for(var k=0;k<str.length;k++) {
        strBaru='';
        var baru=str;
        baru=str.replace(str[j],'');
        if(j!==k) baru=baru.replace(str[k],'');
        for (var l=1;l<baru.length+1;l++) {
        strBaru+=baru[baru.length-l];
        }
        if(strBaru==baru) return str[j]+str[k];
      }
    }
  }
  // jika tidak memenuhi case manapun
  return "not possible";
}

// keep this function call here
PalindromeCreator(readline());
