var input = "hello, world!";

function balikString(kata) {
  var arrayAkhir = [];
  for (var i = kata.length - 1 ; i>=0 ; i--) {
    arrayAkhir.push(kata[i])
  }
  var hasil = arrayAkhir.join('');
  console.log(hasil);
}

balikString(input); 
