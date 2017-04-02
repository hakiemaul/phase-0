// Have the function FirstReverse(str) take the str parameter being passed
// and return the string in reversed order. For example: if the input string
// is "Hello World and Coders" then your program should return the string sredoC
// dna dlroW olleH.
//
// Use the Parameter Testing feature in the box below to test your code with
// different arguments.

// By: Aulia Hakiem
// Test Case Point: 5

function FirstReverse(str) {
    //konversi string jadi array
    var strPisah=str.split('');
    var strBalik=[];
    //pengisian arr strBalik dengan urutan terbalik
    for (var i=0;i<str.length+1;i++) {
        strBalik[i]=strPisah[str.length-i];
    }
    //konversi array jadi string
    str=strBalik.join('');
  return str;

}

// keep this function call here
FirstReverse(readline());
