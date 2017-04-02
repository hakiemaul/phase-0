// Have the function LetterCountI(str) take the str parameter being passed and
// return the first word with the greatest number of repeated letters. For
// example: "Today, is the greatest day ever!" should return greatest because
// it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If
// there are no words with repeating letters return -1. Words will be separated
// by spaces.

// By: Aulia Hakiem
// Test Case Point: 5

function LetterCountI(str) {
  var pisah=str.split(' ');
  var hitung=[];
  //looping untuk tiap kata dalam str
  for(var i=0;i<pisah.length;i++) {
    var kode=[];
    hitung[i]=0;
    //cari kode karakter huruf tiap kata
    for(var j=0;j<pisah[i].length;j++) {
      kode[j]=pisah[i].charCodeAt(j);
      kode.sort(function(a,b) { return a-b });
    }
    //cek kesamaan karakter tiap kata, tiap huruf berulang menambahkan variabel
    //hitung untuk index i
    for(j=0;j<pisah[i].length-1;j++) {
      if(kode[j]==kode[j+1]) {
        hitung[i]+=1;
      } else {
        hitung[i];
      }
    }
  }
  var mungkin=0;
  //cari index dari kata yg memiliki huruf berulang terbanyak (dicari dari var
  //hitung)
  var maxInd = hitung.indexOf(Math.max(...hitung));
  //cari apakah terdapat kata yg memiliki huruf berulang, kalau tidak ada nanti
  //dikembalikan dengan nilai false, jika ada akan dikembalikan dengan indeks
  //yang sudah dicari diatas
  for(i=0;i<pisah.length;i++) {
    if(hitung[i]===0) {
      mungkin;
    } else mungkin++;
  }
  if(mungkin===0) {
    return -1;
  } else {
    return pisah[maxInd];
  }
}

// keep this function call here
LetterCountI(readline());
