// Have the function SimpleEvens(num) check whether every single number in the
// passed in parameter is even. If so, return the string true, otherwise return
// the string false. For example: if num is 4602225 your program should return
// the string false because 5 is not an even number.

// By: Aulia Hakiem
// Test Case Point: 5

function SimpleEvens(num) {
  var str=num.toString()
  var mungkin=0;
  //cari tiap elemen yang merupakan angka genap
  for(var i=0;i<str.length;i++) {
    if(Number(str[i])%2===0) {
      mungkin++;
    }
  }
  if(mungkin==str.length) return true; else return false;
}

// keep this function call here
SimpleEvens(readline());
