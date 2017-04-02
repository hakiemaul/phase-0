// Have the function FirstFactorial(num) take the num parameter being passed and
// return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the
// test cases, the range will be between 1 and 18 and the input will always be
// an integer.

// By: Aulia Hakiem
// Test Case Point: 5

function FirstFactorial(num) {
    var hasilKali=1;
    //looping dengan hitung hasil kali
    for(var i=0;i<num;i++) {
        hasilKali=hasilKali*(num-i);
    }
    return hasilKali;
}

// keep this function call here
FirstFactorial(readline());
