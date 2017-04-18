// Function 2 Competency Test

function removeDash(str) {
  for(var i=0;i<str.length;i++) {
    str=str.replace('-',' ');
  }
  return str;
}

function capitalizeString(str) {
  str=str.toLowerCase();
  str=str.split('');
  var kode=str[0].charCodeAt(0);
  if(kode>=97 && kode<=122) {
    str[0]=String.fromCharCode(kode-32);
  };
  for(var i=1;i<str.length;i++) {
    if(str[i]===' ') {
      var ascii=str[i+1].charCodeAt(0);
      if(ascii>=97 && ascii<=122) {
        str[i+1]=String.fromCharCode(ascii-32);
      };
    }
  }
  return str.join('');
}

function transformTextToNumber(str) {
  str=str.split('');
  for(var i=0;i<str.length;i++) {
    switch (str[i]) {
      case 'i':
      case 'I':
        str[i]=1;
        break;
      case 'e':
      case 'E':
        str[i]=3;
        break;
      case 's':
      case 'S':
        str[i]=5;
        break;
      case 'o':
      case 'O':
        str[i]=0;
        break;
      case 'a':
      case 'A':
        str[i]=4;
        break;
    }
  }
  return str.join('');
}

function stringManipulator(str) {
  var cleanedStr = removeDash(str);
  var capitalizedStr = capitalizeString(cleanedStr);
  var transformedStr = transformTextToNumber(capitalizedStr);
  return transformedStr;
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// D15 15 V3ry 345y 1 C4n D0 Th15
