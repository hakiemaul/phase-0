// Have the function PowersofTwo(num) take the num parameter being passed which
// will be an integer and return the string true if it's a power of two. If it's
// not return the string false. For example if the input is 16 then your program
// should return the string true but if the input is 22 then the output should
// be the string false.

// By: Aulia Hakiem
// Test Case Point: 5

function PowersofTwo(num) {
  //looping pembagian hingga 1<=num<=2
  while(num>1) {
      num=num/2;
  }
  //cek kondisi num
  if(num==1) {
      return true;
  } else {
      return false;
  }
}

// keep this function call here
PowersofTwo(readline());
