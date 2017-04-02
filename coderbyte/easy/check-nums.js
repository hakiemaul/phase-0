// Have the function CheckNums(num1,num2) take both parameters being passed and
// return the string true if num2 is greater than num1, otherwise return the
// string false. If the parameter values are equal to each other then return the
// string -1.
//
// Use the Parameter Testing feature in the box below to test your code with
// different arguments.

// By: Aulia Hakiem
// Test Case Point: 5

function CheckNums(num1,num2) {
  //check if num2 is bigger than num1, return appropriate results
  if(num1<num2) {
      return true;
  } else if(num2<num1) {
      return false;
  } else {
      return -1;
  }
}

// keep this function call here
CheckNums(readline());
