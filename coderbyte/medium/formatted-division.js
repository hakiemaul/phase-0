// Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.

// By: Aulia Hakiem
// Test Case Point: 5

"use strict"
function FormattedDivision(num1,num2) {
  // dividing the number
  let div=num1/num2;
  let arr=div.toString().split('');
  let tampung=[];
  let tes=0;
  let koma=0;
  let foo=0;
  // finding coordinate of the '.' in array
  for(let i=0;i<arr.length;i++) {
    if(arr[i]=='.') {
      tes=i;
      koma=tes;
    }
  }
  // giving '.' if the division gave a whole number result
  if(tes==0) {
    arr.push('.');
    tes=arr.length-1;
    koma=arr.length-1;
  }
  // make another array which only took up to 4 digits after the '.'
  for(let i=0;i<arr.length;i++) {
    if(i<=(koma+4)) {
      tampung[i]=arr[i];
    }
  }
  for(let i=0;i<arr.length;i++) {
    if(arr[i]=='.') {
      // gave the thousands denominator (',')
      while(tes>3) {
        tampung.splice(tes-3,0,',');
        tes-=3;
        koma+=1;
      }
      // gave another zeroes if there is not enough zero behind '.'
      if(koma>tampung.length-5 && koma!=tampung.length-1) {
        foo=koma-(tampung.length-5);
        while(foo>0) {
          tampung.push('0');
          foo-=1;
        }
      }
      if(koma==tampung.length-1) tampung.push('0000');
    }
  }
  // rounding up the last digit if the condition is met
  if(Number(tampung[tampung.length-1])>=5) tampung[tampung.length-1]=Number(tampung[tampung.length-1])+1;
  console.log(tampung.join(''))
}

// keep this function call here
FormattedDivision(911200000000,3);
