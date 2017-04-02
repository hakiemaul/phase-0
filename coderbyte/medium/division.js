// Have the function Division(num1,num2) take both parameters being passed and
// return the Greatest Common Factor. That is, return the greatest number that
// evenly goes into both numbers with no remainder. For example: 12 and 16 both
// are divisible by 1, 2, and 4 so the output should be 4. The range for both
// parameters will be from 1 to 10^3.

// By: Aulia Hakiem
// Test Case Point: 5

function Division(num1,num2) {
  var faktor=[];
  for(var i=1;i<1000;i++) {
    //mencari faktor dari kedua angka, yg tersimpan akan yang terbesar
    if(num1%i===0&&num2%i===0) {
      faktor=i;
    }
  }
  return faktor;
}

// keep this function call here 
Division(readline());
