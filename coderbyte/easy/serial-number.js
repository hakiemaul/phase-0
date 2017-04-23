// Have the function SerialNumber(str) take the str parameter being passed and determine if it is a valid serial number with the following constraints:
//
// 1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
// 2. The first set of digits must add up to an even number.
// 3. The second set of digits must add up to an odd number.
// 4. The last digit in each set must be larger than the two previous digits in the same set.
//
// If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "224.315.218" then your program should return "true".

// By: Aulia Hakiem
// Test Case Point: 5

"use strict"
function SerialNumber(str) {
  let arr=str.split('.');
  for(let i=0;i<arr.length;i++) {
    if(arr[i].length!==3) return false;
  }
  for(let i=0;i<arr.length;i++) {
    let jumlah=Number(arr[i][2]);
    console.log(jumlah)
    for(let j=0;j<2;j++) {
      if(arr[i][j]>arr[i][2]) return false;
      jumlah+=Number(arr[i][j]);
    }
    if(i===0) {
      if(jumlah%2!==0) return false;
    }
    if(i==1) {
      if(jumlah%2===0) return false;
    }
  }
  return true;
}

// keep this function call here
SerialNumber("114.568.112");
