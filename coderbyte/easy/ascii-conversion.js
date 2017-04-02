// Have the function ASCIIConversion(str) take the str parameter being passed
// and return a new string where every character, aside from the space
// character, is replaced with its corresponding decimal character code. For
// example: if str is "dog" then your program should return the string 100111103
// because d = 100, o = 111, g = 103. Use the Parameter Testing feature in the
// box below to test your code with different arguments.

// By: Aulia Hakiem
// Test Case Point: 5

function ASCIIConversion(str) {
  var arr=[];
  for(var i=0;i<str.length;i++) {
    //ganti tiap karakter ke kode ascii nya, kecuali karakter spasi (' ')
    if(str.charCodeAt(i)!==32) arr[i]=str.charCodeAt(i); else arr[i]=' ';
  }
  return arr.join('')
}

// keep this function call here
ASCIIConversion(readline());
