// Recursive Competency Test

function tambahTerus(num) {
  var digit=num.toString().split('').length;
  var maks=Math.pow(10,digit-1);
  if(num<10) {
    return num;
  } else {
    return Math.floor(num/maks) + tambahTerus(num-(maks*Math.floor(num/maks)));
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
