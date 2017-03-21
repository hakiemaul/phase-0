var bintang = [];

for (var index1=1;index1<=10;index1++) {
  for (var index2=0;index2<=index1;index2++) {
    bintang += '*';
  }
  console.log(bintang);
  bintang = [];
}