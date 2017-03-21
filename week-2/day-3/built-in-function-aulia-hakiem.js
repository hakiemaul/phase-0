function dataHandling2(arrInput) {
  arrInput.splice(4,1);
  arrInput.splice(4,1,'Pria');
  arrInput.splice(5,1,'SMA International Metro');
  var stringTambah = ' Elsharawy';
  arrInput[1] = arrInput[1].concat(stringTambah);
  console.log(arrInput);
  
  var ttl = arrInput[3].split('/');
  switch (ttl[1]) {
    case '01':
      console.log('Januari');
      break;
    case '02':
      console.log('Februari');
      break;
    case '03':
      console.log('Maret');
      break;
    case '04':
      console.log('April');
      break;
    case '05':
      console.log('Mei');
      break;
    case '06':
      console.log('Juni');
      break;
    case '07':
      console.log('Juli');
      break;
    case '08':
      console.log('Agustus');
      break;
    case '09':
      console.log('September');
      break;
    case '10':
      console.log('Oktober');
      break;
    case '11':
      console.log('November');
      break;
    case '12':
      console.log('Desember');
      break;
    default:
      console.log('Not a valid month');
      break;
  }
  
  ttl.sort(function(a, b){return b-a;});
  console.log(ttl);
  
  var ttlJoin = ttl.join('-');
  console.log(ttlJoin);
  
  var nama = arrInput[1].slice(0,14);
  console.log(nama);
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);