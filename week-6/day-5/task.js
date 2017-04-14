"use strict";

// Soal 1
var transformArrToLowerCase = arr => {
  return arr.map(isi => {
    return isi.toLowerCase();
  });
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

// Soal 2
var filterArrUnder10 = arr => {
  return arr.filter(isi => {
    return isi%3===0 || isi%4===0;
  });
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

// Soal 3
var reduceFindMaximum = arr => {
  return arr.reduce((sebelum,sesudah) => {
    return sebelum>sesudah ? sebelum : sesudah;
  });
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9
