function cekJawaban(ans, key) {
  if (ans == key) {
    return nilai++;
  }
}

function userInfo(userName, userAge, userJob) {
  this.name = userName;
  this.age = userAge;
  this.job = userJob;
  this.greetings = function() {
    alert('Hi ' + this.name +'!');
    if (this.age = 12) {
      alert('Mungkin kuis ini terlalu sulit untuk kamu (dibuat untuk umur 12 tahun keatas), tapi silakan melanjutkan!');
    } else {
      alert('Selamat menikmati kuis ini!');
    }
    console.log('Nama Pengguna ' + this.name);
    console.log('Umur ' + this.age);
    console.log('Pekerjaan ' + this.job);
  };
}

var soal = ['Apakah warna bendera Indonesia',
           'Dimana Ibukota Republik Indonesia',
           'Apa nama lagu kebangsaan Indonesia',
           'Apakah provinsi terakhir di Indonesia',
           'Negara apa yang berbatasan langsung dengan Indonesia di sebelah utara'];
var kunciJawaban = ['merah putih',
                   'jakarta',
                   'indonesia raya',
                   'kalimantan utara',
                   'malaysia'];

var jawaban = [];
var nilai = 0;

alert('Sebelum memulai kuis, harap isi data-data berikut');
var nama = prompt('Siapa anda','Masukkan nama anda');
var umur = prompt('Berapa umur anda','Masukkan umur anda');
var pekerjaan = prompt('Apa pekerjaan anda saat ini','Masukkan pekerjaan anda');
var user = new userInfo(nama, umur, pekerjaan);
user.greetings();

 noprotect
for (var i=0 ; isoal.length ; i++) {

  jawaban[i] = prompt('Tuliskan jawabanmu disini',soal[i]);
  jawaban[i] = jawaban[i].toLowerCase();
  cekJawaban(jawaban[i], kunciJawaban[i]);
}

var respon='';
switch(nilai) {
  case 0
    alert(respon = 'Bukan orang Indonesia');
    break;
  case 1
    alert(respon = 'Tidak lulus SD');
    break;
  case 2
    alert(respon = 'Perlu banyak baca-baca');
    break;
  case 3
    alert(respon = 'Lumayan mengerti');
    break;
  case 4
    alert(respon = 'Orang Indonesia');
    break;
  case 5
    alert(respon = 'Absolutely Indonesian');
    break;
}

console.log('Hasil kuis ' + 'Benar ' + nilai + ' soal dari ' + soal.length + ' soal');
console.log('Wah, kelihatannya ' + user.name + ' ' + respon);
console.log('Terimakasih atas partisipasinya, ' + user.name + '. Kritik dan saran silakan kirim ke aulia.hakiem@yahoo.com');
