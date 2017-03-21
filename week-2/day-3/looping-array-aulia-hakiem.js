var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
            ];

function dataHandling(array2d) {
for (var i=0 ; i<array2d.length ; i++) {
  for (var j=0 ; j<array2d[i].length-1 ; j++) {
    if (j===0) {
      console.log('Nomor ID: ' + array2d[i][j]);
    } else if (j===1) {
      console.log('Nama Lengkap: ' + array2d[i][j]);
    } else if (j===2) {
      console.log('TTL: ' + array2d[i][j] + ' ' + array2d[i][j+1]);
    } else {
      console.log('Hobi: ' + array2d[i][j+1]);
    }
  }
}
}

dataHandling(input);