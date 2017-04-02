// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For
// example: if the input is 4 then your program should return 10 because
// 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number
// from 1 to 1000.

// By: Aulia Hakiem
// Test Case Point: 5

function SimpleAdding(num) {
  //fungsi rekursif
  if (num==1) {
    return 1;
  } else {
    return num+SimpleAdding(num-1);
  }
}

// keep this function call here
SimpleAdding(readline());
