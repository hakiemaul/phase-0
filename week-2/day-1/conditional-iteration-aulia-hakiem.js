for (var counter=1;counter<=100;counter++) {
  if (counter%2===0) {
    console.log('GENAP');
  }
  else {
    console.log('GANJIL');
  }
}

var penambahan = 2;
var counter = 1;
var counter2 = counter + penambahan;
for (counter=1;counter<=100;counter = counter + penambahan) {
  if (counter%counter2===0) {
    console.log(counter + ' KELIPATAN ' + counter2);
  }
  else {
    console.log('');
  }
}

penambahan = 5;
counter = 1;
counter2 = counter + penambahan;
for (counter=1;counter<=100;counter = counter + penambahan) {
  if (counter%counter2===0) {
    console.log(counter + ' KELIPATAN ' + counter2);
  }
  else {
    console.log('');
  }
}

penambahan = 9;
counter = 1;
counter2 = counter + penambahan;
for (counter=1;counter<=100;counter = counter + penambahan) {
  if (counter%counter2===0) {
    console.log(counter + ' KELIPATAN ' + counter2);
  }
  else {
    console.log('');
  }
}