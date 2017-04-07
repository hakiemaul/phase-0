// Have the function NonrepeatingCharacter(str) take the str parameter being
// passed, which will contain only alphabetic characters and spaces, and return
// the first non-repeating character. For example: if str is "agettkgaeee" then
// your program should return k. The string will always contain at least one
// character and there will always be at least one non-repeating character.

// By: Aulia Hakiem
// Test Case Point: 5

function NonrepeatingCharacter(str) {
  for(var i=0;i<str.length;i++) {
    // variabel penghitung apakah ada yang sama
    var sama=0;
    for(var j=i+1;j<str.length;j++) {
      // case jika sama
      if(str[i]===str[j]) {
        sama++;
      }
    }
    // jika tidak sama
    if(sama===0) {
      return str[i];
    // jika sama, tambahkan karakter tersebut pada ujung string
    } else {
      str=str+str[i];
    }
  }
}

// keep this function call here
NonrepeatingCharacter(readline());
