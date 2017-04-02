function perkalian(angka) {
  if (angka == 1) {
    return 1;
  } else {
    return angka * perkalian(angka-1);
  }
}


function perkalianKurang(angka, angkaLain) {
  if (angka-angkaLain<=0) {
    return angka;
  } else {
    return angka * perkalianKurang(angka-angkaLain, angkaLain);
  }
}

console.log(perkalian(5));
console.log(perkalianKurang(12,5));