var nama = 'Aulia';
var peran = 'Ksatria';  

if (nama == ' ' && peran == ' ') {
  console.log('Nama tidak boleh kosong');
  console.log('Pilih peranmu untuk memulai game');
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
      console.log('Pilih peranmu! (Ksatria, Tabib, Penyihir)');
      break;
  }
}

var tahunLahir = 1993;
var umur = 2017-tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if (nama==[]) {
  peran = 'Kacung';
} 
 
var count = 1;    

while (count<tahunLahir) {
  if (count%umur===0) {
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth = monsterHealth - umur;
  } else if (count%kodeMonster===0) {
    console.log('Monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth = playerHealth - kodeMonster;
  } else if (count%umur===0 && count%kodeMonster===0) {
    console.log('Health keduanya bertambah');
    playerHealth = playerHealth + kodeMonster;
    monsterHealth = monsterHealth + umur;
  } else {
  } count = count +1;
}

console.log(playerHealth);
console.log(monsterHealth);

if (playerHealth > monsterHealth) {
  console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
  } else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}
