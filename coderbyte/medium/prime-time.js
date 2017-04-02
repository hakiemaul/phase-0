// Have the function PrimeTime(num) take the num parameter being passed and
// return the string true if the parameter is a prime number, otherwise return
// the string false. The range will be between 1 and 2^16.

// By: Aulia Hakiem
// Test Case Point: 5

function PrimeTime(num) {
    var bukanPrima=0;
    for(var i=2;i<num;i++) {
      //mencari hasil modulus dari tiap angka hingga angka tersebut
        if(num%i===0) {
            bukanPrima++;
        } else {
            bukanPrima;
        }
    }
    if (bukanPrima===0) return true; else return false;
}
