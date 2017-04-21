"use strict"
function StringExpression(str) {
  let arr=str.split('');
  let tampung=[];
  let hitung=[];
  for(var i=0;i<arr.length;i++) {
    if(arr[i]=='z') {
      tampung.push(0);
    }
    if(arr[i]=='o'&&arr[i+1]=='n'&&arr[i+2]=='e') {
      tampung.push(1);
    }
    if(arr[i]=='t'&&arr[i+1]=='w'&&arr[i+2]=='o') {
      tampung.push(2);
    }
    if(arr[i]=='t'&&arr[i+1]=='h'&&arr[i+2]=='r') {
      tampung.push(3);
    }
    if(arr[i]=='f'&&arr[i+1]=='o'&&arr[i+2]=='u') {
      tampung.push(4);
    }
    if(arr[i]=='f'&&arr[i+1]=='i'&&arr[i+2]=='v') {
      tampung.push(5);
    }
    if(arr[i]=='x') {
      tampung.push(6);
    }
    if(arr[i]=='s'&&arr[i+1]=='e'&&arr[i+2]=='v') {
      tampung.push(7);
    }
    if(arr[i]=='e'&&arr[i+1]=='i'&&arr[i+2]=='g') {
      tampung.push(8);
    }
    if(arr[i]=='n'&&arr[i+1]=='i'&&arr[i+2]=='n') {
      tampung.push(9);
    }
    if(arr[i]=='m') {
      tampung.push('-');
      hitung.push('-');
    }
    if(arr[i]=='p'&&arr[i+1]=='l') {
      tampung.push('+');
      hitung.push('+');
    }
  }

  let op=tampung.join('').match(/\d+/g);
  let hasil=Number(op[0]);
  for(i=0;i<hitung.length;i++) {
    if(hitung[i]=='+') {
      hasil=hasil+Number(op[i+1]);
    }
    if(hitung[i]=='-') {
      hasil=hasil-Number(op[i+1]);
    }
  }
  hasil=hasil.toString();
  let out='';
  for(i=0;i<hasil.length;i++) {
    if(hasil[i]=='-') {
      out+='negative';
    }
    switch(hasil[i]) {
      case '1':
        out+='one';
        break;
      case '2':
        out+='two';
        break;
      case '3':
        out+='three';
        break;
      case '4':
        out+='four';
        break;
      case '5':
        out+='five';
        break;
      case '6':
        out+='six';
        break;
      case '7':
        out+='seven';
        break;
      case '8':
        out+='eight';
        break;
      case '9':
        out+='nine';
        break;
      case '0':
        out+='zero';
        break;
    }
  }
  console.log(out)
}

// keep this function call here
StringExpression("oneminusoneone");
