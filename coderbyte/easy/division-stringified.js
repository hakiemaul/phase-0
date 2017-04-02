// Have the function DivisionStringified(num1,num2) take both parameters being
// passed, divide num1 by num2, and return the result as a string with properly
// formatted commas. If an answer is only 3 digits long, return the number with
// no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789
// and num2 is 10000 the output should be "12,346".

// By: Aulia Hakiem
// Test Case Point: 5

function DivisionStringified(num1,num2) {
  //pembagian dengan pembulatan
  var bagi=Math.round(num1/num2);
  //buat string dengan memisahkan hasil bagi dengan tanda koma
  str=String(bagi).replace(/(.)(?=(\d{3})+$)/g,'$1,')
  return str;
}

// keep this function call here
DivisionStringified(readline());
