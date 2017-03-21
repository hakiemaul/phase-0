var senin = {
    hari: 'Senin',
    kehadiran: 'Masuk',
    alasan: ''
};

var rabu = {
    hari: 'Rabu',
    kehadiran: 'Masuk',
    alasan: ''
};

var jumat = {
    hari: 'Jumat',
    kehadiran: 'Absen',
    alasan: 'Dinas Luar'
};

var arrGabung = [senin, rabu, jumat];
var jumlahHari = 0;
var jumlahHadir = 0;

for (var count = 0; count<arrGabung.length; count++) {
  console.log('Hari: ' + arrGabung[count].hari);
  console.log('Kehadiran: ' + arrGabung[count].kehadiran);
  
  if (arrGabung[count].alasan !== '') {
    console.log('Alasan: ' + arrGabung[count].alasan);
  }
  
  jumlahHari++;
  
  if (arrGabung[count].kehadiran == 'Masuk') {
    jumlahHadir++;
  }
}

console.log('Total hari kerja minggu ini: ' + jumlahHari + ' hari');
console.log('Total masuk: ' + jumlahHadir +' hari');
console.log('Total tidak masuk: ' + (jumlahHari-jumlahHadir) +' hari');




