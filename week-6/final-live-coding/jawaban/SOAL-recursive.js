// Recursive Competency Test

function tambahTerus(num) {
  var jumlah=0;
  var x=num.toString().split('');
  for(var i=0;i<x.length;i++) {
    jumlah+=parseInt(x[i]);
  }
  if(jumlah.toString().length == 1) {
    return jumlah;
  }
  else {
    return tambahTerus(jumlah);
  }
}

console.log(tambahTerus(13)); // 4
console.log(tambahTerus(54)); // 9
console.log(tambahTerus(123)); // 6
console.log(tambahTerus(5)); // 5
console.log(tambahTerus(1234)); // 1
console.log(tambahTerus(99)); // 9
console.log(tambahTerus(88888888)); // 1
console.log(tambahTerus(333)); // 9
