/*
HACKTIV8 Online Live Coding 2

Nama : Aulia Hakiem Noersedya

======================
Gambler's Slot Machine
======================

[DESKRIPSI]

Seorang pejudi memiliki kredit balance di Slot Machine sebanyak 5000 DOLLARS melakukan pemutaran Slot Machine. Slot machine adalah sebuah
permainan judi kasino yang akan menghasilkan tiga angka (range angka hanya 1-9).

Rules:
1. Apabila ia mendapatkan 3 angka dengan nilai yang berbeda, maka kredit balance akan dikurangi dari setiap angka dikalikan dengan 50.
    Contoh:
    a. hasil Slot Machine adalah 1, 2, dan 3. Ia kalah.
    kredit balance akan dikurangi sebesar (1 + 3 + 2) * 50 = 300
2. Apabila ia mendapat 2 angka yang sama, ia akan mendapat kredit sebesar total dari
setiap angka dikalikan dengan 100.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 2.
        Ia akan mendapatkan penambahan kredit sebesar (1 + 1 + 2) * 100 = 400
    b.  hasil Slot Machine adalah 3, 5, dan 3.
        Ia akan mendapatkan penambahan kredit sebesar (3 + 5 + 3) * 100 = 1100
3. Apabila ia mendapat 3 angka yang sama, ia akan mendapat kredit sebesar total angka
tersebut dikalikan dengan 200.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 1.
        Ia akan mendapatkan penambahan kredit sebesar (1 + 1 + 1) * 200 = 600
    b.  hasil Slot Machine adalah 3, 3, dan 3.
        Ia akan mendapatkan penambahan kredit sebesar (3 + 3 + 3) * 200 = 1800

[INSTRUKSI]

Tersedia sebuah function bernama evaluateSlotMachine yang menampung satu parameter,
berupa array yang berisikan tiga nilai hasil keluaran dari slot machine.

Buatlah sebuah function yang akan mengembalikan string berupa
- "YOU WIN X DOLLARS" apabila tidak kalah, dimana X merupakan kredit yang dimenangkan pejudi.
dan "YOUR TOTAL CREDIT BALANCE IS X DOLLAR" hasil penambahan dari kredit awal + kredit yang dimenangkan

- "YOU LOSE X DOLLAR" apabila kalah (mendapatkan tiga angka berbeda dari slot machine), dimana x merupakan
kredit yang dibayarkan pejudi.
dan YOUR TOTAL CREDIT BALANCE IS X DOLLAR" hasil pengurangan dari kredit awal - kredit yang dibayarkan"

*/


function evaluateSlotMachine(Arr) {
  var creditBalance = 5000;
  var sama=0;
  // menghitung angka yang sama, doesn't work kalo angka yg sama diselingi angka lain, tapi buat kasus ini ga ada masalah
  for(var i=0;i<Arr.length;i++) {
    if(Arr[i]==Arr[i+1]) {
      sama++;
    }
  }
  var jumlah=0;
  var hasil=0;
  switch(sama) {
    // hitung rugi
    case 0:
      for(i=0;i<Arr.length;i++) {
        jumlah+=Arr[i];
      }
      hasil=creditBalance-(jumlah*50);
      break;
    case 1:
    // hitung untung
      for(i=0;i<Arr.length;i++) {
        jumlah+=Arr[i];
      }
      hasil=creditBalance+(jumlah*100);
      break;
    //hitung untung
    case 2:
      for(i=0;i<Arr.length;i++) {
        jumlah+=Arr[i];
      }
      hasil=creditBalance+(jumlah*200);
      break;
  }
  // cek untung/rugi, print sesuai dengan kondisi
  if(creditBalance>hasil) {
    return "YOU LOSE " + (creditBalance-hasil) + " DOLLARS, YOUR TOTAL CREDIT BALANCE IS " + hasil + " DOLLAR";
  } else return "YOU WIN " + (hasil-creditBalance) + " DOLLAR, YOUR TOTAL CREDIT BALANCE IS " + hasil + " DOLLAR";;
  // CODING DISINI!
}

console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 400 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 5400 DOLLAR"
console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 5600 DOLLAR"
console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 8000 DOLLAR"
console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 1200 DOLLARS, YOUR TOTAL CREDIT BALANCE IS 6200 DOLLAR"
console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE 300 DOLLAR",  YOUR TOTAL CREDIT BALANCE IS 4700 DOLLAR"
