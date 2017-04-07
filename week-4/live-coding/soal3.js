/*
HACKTIV8 Final Live Coding 3

Nama : Aulia Hakiem Noersedya

======================
Pair Programming
======================

[DESKRIPSI]
HACKTIV8 adalah kelas pemrograman yang sedang menyusun susunan Pair Programming.
Setiap murid di kelas akan dibagi menjadi kelompok beranggotakan dua orang.
Apabila jumlah murid di kelas ganjil, instruktur yang akan menemani satu orang yang tersisa.

Buatlah susunan pasangan Pair Programming di kelas!

[INSTRUKSI]
Tersedia sebuah function bernama arrangePairs yang akan menerima satu parameter berupa string,
yang berisikan nama-nama murid di kelas dipisahkan berdasarkan spasi. function akan mengembalikan sebuah array baru yang merupakan kelompok-kelompok pembagian tersebut.

* Ubahlah huruf awal nama murid menjadi huruf capital. *

[START]
*/


function arrangePairs(studentsArr) {
  var arr=[];
  var students=studentsArr.split(' ');
  if(studentsArr==='') return arr;
  for(var i=0;i<students.length;i++) {
    var upp='';
    for(var j=0;j<students[i].length;j++) {
      if(j===0) {
        var kode=students[i].charCodeAt(j);
        upp=String.fromCharCode(kode-32);
      }
    }
    students[i]=students[i].replace(students[i][0],upp)
  }
  for(i=0;i<students.length;i+=2) {
    if(students[i+1]!==undefined) {
    arr.push(students[i] + ' dan ' + students[i+1]);
    }
    if(students[i+1]===undefined) {
      arr.push(students[i] + ' dan Instruktur');
    }
  }
  return arr;
}
console.log(arrangePairs('yani joni doni roni')); // ['Yani dan Joni', 'Doni dan Roni']
console.log(arrangePairs('james jake jade')); // ['James dan Jake', 'Jade dan Instruktur']
console.log(arrangePairs('tori nori sori wori mori')); // ['Tori dan Nori', 'Sori dan Wori', 'Mori dan Instruktur'];
console.log(arrangePairs('rudi')); // ['Rudi dan Instruktur']
console.log(arrangePairs('')); // []
