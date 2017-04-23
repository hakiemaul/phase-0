// Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.

// By: Aulia Hakiem
// Test Case Point: 5

"use strict"
function FormattedDivision(num1,num2) {
  let div=num1/num2;
  let arr=div.toString().split('');
  let tampung=[];
  let tes=0;
  let koma=0;
  let foo=0;
  for(let i=0;i<arr.length;i++) {
    if(arr[i]=='.') {
      tes=i;
      koma=tes;
    }
  }
  if(tes==0) {
    arr.push('.');
    koma=arr.length-1;
  }
  for(let i=0;i<arr.length;i++) {
    if(i<=(koma+4)) {
      tampung[i]=arr[i];
    }
  }
  for(let i=0;i<arr.length;i++) {
    if(arr[i]=='.') {
      tes=i;
      koma=tes;
      while(tes>3) {
        tampung.splice(tes-3,0,',');
        tes-=3;
        koma+=1;
      }
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
  if(Number(tampung[tampung.length-1])>=5) tampung[tampung.length-1]=Number(tampung[tampung.length-1])+1;
  console.log(tampung.join(''))
}

// keep this function call here
FormattedDivision(9112,2);
