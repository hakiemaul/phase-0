"use strict"
function ArrayAddition(arr) {
  //COMBINATOR
  //mencari angka terbesar
  arr=arr.sort(function(a, b){return a-b;});
  let arrBesar = arr.pop();
  //mencari semua kemungkinan penambahan
  let subarr=[];
  let comb=function getSubArrays(arr) {
    if(arr.length===1) {
      return [arr];
    } else {
      subarr=getSubArrays(arr.slice(1));
      return subarr.concat(subarr.map(e => {
        return e.concat(arr[0]);
      }), [[arr[0]]]); //kaga ngarti
    }
  };
  console.log(comb(arr))
  //mencari jumlah semua kemungkinan
  let jumlah = [];
  for (let i = 0; i < comb(arr).length; i++) {
    jumlah[i] = 0;
    for (let j = 0; j < comb(arr)[i].length; j++) {
      jumlah[i] = jumlah[i] + comb(arr)[i][j];
    }
  }
  //menilai hasil
  let mungkin=0;
  for (let i=0;i<jumlah.length;i++) {
    if (jumlah[i]==arrBesar) {
      mungkin=mungkin + 1;
    } else {
      mungkin=mungkin;
    }
  }
  //hasil
  if (mungkin > 0) return true; else return false;
}
// keep this function call here
ArrayAddition([1,2,3,4,5]);
