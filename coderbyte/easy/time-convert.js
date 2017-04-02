// Have the function TimeConvert(num) take the num parameter being passed and
// return the number of hours and minutes the parameter converts to (ie. if
// num = 63 then the output should be 1:3). Separate the number of hours and
// minutes with a colon.

// By: Aulia Hakiem
// Test Case Point: 5

function TimeConvert(num) {
  //mencari menit dengan modulus dan jam dengan hasil bagi
  var menit = num%60;
  if (num-60>=0) {
      var jam = Math.floor(num/60);
  } else {
      jam = 0;
  }
  num = jam+':'+menit;
  return num;
}

// keep this function call here
TimeConvert(readline());
