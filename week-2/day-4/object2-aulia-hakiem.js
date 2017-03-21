var Teman = function(namaTeman, kabarTeman, pekerjaanTeman) {
  this.nama = namaTeman;
  this.kabar = kabarTeman;
  this.pekerjaan = pekerjaanTeman;
  
  this.sapa = function(namaTeman) {
    console.log('Halo ' + namaTeman + ', apa kabar?');
  }
  
  this.balasSapa = function(namaTeman) {
    console.log('Halo ' + namaTeman + ', kabarku baik.');
  }
  
  this.tanyaPekerjaan = function() {
    console.log('Apa pekerjaanmu saat ini?');
  }
  
  this.balasPekerjaan = function() {
    console.log('Pekerjaanku saat ini adalah ' + this.pekerjaan);
  }
  
  this.berpisah = function(namaLain) {
    console.log('Senang bertemu denganmu ' + namaLain.nama + ', semoga kamu sukses sebagai ' + namaLain.pekerjaan);
  }
}

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);