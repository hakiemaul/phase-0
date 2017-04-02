// Have the function SwapCase(str) take the str parameter and swap the case of
// each character. For example: if str is "Hello World" the output should be
// hELLO wORLD. Let numbers and symbols stay the way they are.

// By: Aulia Hakiem
// Test Case Point: 5

function SwapCase(str) {
  var tampung=[];
  var kalimat=str;
  for(var i=0;i<kalimat.length;i++) {
    var kode=kalimat.charCodeAt(i);
    //cek kondisi huruf dgn kode karakter ASCII, ganti sesuai dengan kondisi
    if(kode>=65 && kode<=90) {
      tampung[i]=String.fromCharCode(kode+32);
    } else if(kode>=97 && kode<=122) {
      tampung[i]=String.fromCharCode(kode-32);
    //karakter selain huruf dibiarkan seperti semula
    } else {
      tampung[i]=String.fromCharCode(kode);
    }
  }
  tampung=tampung.join('');
  return tampung;
}

// keep this function call here
SwapCase(readline());
