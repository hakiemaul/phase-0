var nama = 'Aulia';
var peran = '';  

if (nama == ' ' && peran == ' ') {
  console.log('Nama tidak boleh kosong');
  console.log('Pilih peranmu untuk memulai game')
} else if (nama == ' ') {
  console.log('Nama tidak boleh kosong');
} else if (peran == ' ') {
  console.log('Pilih peranmu untuk memulai game'); 
} else {
  switch (peran) {
    case 'Ksatria':
      console.log('Selamat datang di dunia Proxytia, ' + nama);
      console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan pedang!');
      break;
    case 'Tabib': 
      console.log('Selamat datang di dunia Proxytia, ' + nama);
      console.log('Halo ' + peran + ' ' + nama + ', kamu dapat membantu temanmu yang terluka!');
      break;
    case 'Penyihir':
      console.log('Selamat datang di dunia Proxytia, ' + nama);
      console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
      break;
    default:
      console.log('Pilih peranmu! (Ksatria, Tabib, Penyihir)')
      break;
  }
}