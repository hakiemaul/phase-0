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
