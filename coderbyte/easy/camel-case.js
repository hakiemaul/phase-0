// Have the function CamelCase(str) take the str parameter being passed and
// return it in proper camel case format where the first letter of each word is
// capitalized (excluding the first letter). The string will only contain
// letters and some combination of delimiter punctuation characters separating
// each word.

// For example: if str is "BOB loves-coding" then your program should return the
// string bobLovesCoding.

// By: Aulia Hakiem
// Test Case Point: 5

function CamelCase(str) {
  //ubah ke huruf kecil, hapus seluruh karakter yang bukan huruf
  var kecil=str.toLowerCase()
    .replace(/\W/g,' ');
  var arr=kecil.split(' ')
  var kode=0;
  var arr1=[''];
  //pisahkan tiap kata ke huruf-huruf individual
  for(var i=1;i<arr.length;i++) {
    arr[i]=arr[i].split('');
    if(arr[i][0]) {
      kode=arr[i][0].charCodeAt();
      //huruf pertama diganti menjadi huruf besar
      arr1[i]=arr[i][0].replace(String.fromCharCode(kode), String.fromCharCode(kode-32));
    }
    //hapus karakter pertama dari tiap kata
    arr[i].splice(0,1,arr1[i]);
    //gabungkan
    arr[i]=arr[i].join('');
  }
  return arr.join('');
}

// keep this function call here
CamelCase(readline());
