function perkalian(angka) {
  var hasil = angka;
  for (var i=1 ; i<angka ; i++ ) {
    hasil = hasil * (angka-i);
  }
  return hasil;
}

function perkalianKurang(angka, angkaLain) {
  var hasil = angka;
  for (var pengali=angka-angkaLain ; pengali>0 ; pengali=pengali-angkaLain) {
    hasil = hasil * pengali;
  }
  return hasil;
}

console.log(perkalian(5));
console.log(perkalianKurang(12,5));