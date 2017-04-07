// Have the function VowelSquare(strArr) take the strArr parameter being passed
// which will be a 2D matrix of some arbitrary size filled with letters from the
// alphabet, and determine if a 2x2 square composed entirely of vowels exists in
// the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix
// looks like the following:
//
// a b c d
// e i k r
// o u f j
//
// Within this matrix there is a 2x2 square of vowels starting in the second row
// and first column, namely, ei, ou. If a 2x2 square of vowels is found your
// program should return the top-left position (row-column) of the square, so
// for this example your program should return 1-0. If no 2x2 square of vowels
// exists, then return the string not found. If there are multiple squares of
// vowels, return the one that is at the most top-left position in the whole
// matrix. The input matrix will at least be of size 2x2.

// By: Aulia Hakiem
// Test Case Point: 5

function VowelSquare(strArr) {
  var row=[];
  var col=[];
  for(var i=0;i<strArr.length;i++) {
    // mencari koordinat tiap vowel
    for(var j=0;j<strArr[0].length;j++) {
      switch(strArr[i][j]) {
        case 'a':
        case 'i':
        case 'u':
        case 'e':
        case 'o':
          // simpan koordinat tiap vowel
          row.push(i);
          col.push(j);
          break;
      }
    }
  }
  var row2=[];
  var col2=[];
  for(i=0;i<col.length-1;i++) {
    // mencari apabila vowel tersebut dilanjutkan dengan vowel lain dalam baris
    if(row[i]==row[i+1]) {
      for(j=i+1;j<col.length-1;j++) {
        // mencari apabila vowel tersebut diikuti vowel lain dalam kolom
        if(col[i]==col[j] && col[i+1]==col[j+1]) {
          // simpan koordinat jika vowel tersebut mengikuti kondisi diatas
          row2.push(row[i])
          col2.push(col[i])
        }
      }
    } else console.log('not found')
  }
  // sorting array vowel
  row2.sort(function(a,b){return a-b})
  col2.sort(function(a,b){return a-b})
  if(row2[0]===undefined || col2[0]===undefined) return 'not found'; else return row2[0] + '-' + col2[0];
}

// keep this function call here
VowelSquare(readline());
