// Have the function ExOh(str) take the str parameter being passed and return
// the string true if there is an equal number of x's and o's, otherwise return
// the string false. Only these two letters will be entered in the string, no
// punctuation or numbers. For example: if str is "xooxxxxooxo" then the output
// should return false because there are 6 x's and 5 o's.

// By: Aulia Hakiem
// Test Case Point: 5

function ExOh(str) {
  var countX=0;
  var countO=0;
  //menghitung x dan o dengan menyamakan tiap bagian dari string
  for (i=0 ; i<str.length ; i++) {
    if (str[i]==='x') {
      countX++;
    } else if (str[i]==='o') {
      countO++;
    }
  }
  //cek kondisi jumlah x dan o
  if (countX==countO) {
    return true;
  } else {
    return false;
  }
}
// keep this function call here
ExOh(readline());
