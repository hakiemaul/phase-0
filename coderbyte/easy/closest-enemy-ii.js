// Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in
// strArr which will be a 2D matrix that contains only the integers 1, 0, or 2.
// Then from the position in the matrix where a 1 is, return the number of
// spaces either left, right, down, or up you must move to reach an enemy which
// is represented by a 2. You are able to wrap around one side of the matrix to
// the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"]
// then this looks like the following:
//
// 0 0 0 0
// 1 0 0 0
// 0 0 0 2
// 0 0 0 2
//
// For this input your program should return 2 because the closest enemy (2) is
// 2 spaces away from the 1 by moving left to wrap to the other side and then
// moving down once. The array will contain any number of 0's and 2's, but only
// a single 1. It may not contain any 2's at all as well, where in that case
// your program should return a 0.

// By: Aulia Hakiem
// Test Case Point: 4
// Kesalahan: -Belum cover pergeseran di baris jika lebih dekat dengan anggota
//            baris tersebut.
//            -Belum cover pergeseran antar baris jika angka 1 tidak terdapat
//            di ujung kolom

function ClosestEnemyII(strArr) {
  var indexX, indexY;
  var indexX2=[];
  var indexY2=[];
  for(var i=0;i<strArr.length;i++) {
    for(var j=0;j<strArr[0].length;j++) {
      if(strArr[i][j]=='1') {
        indexY=i;
        indexX=j;
      }
      if(strArr[i][j]=='2') {
        indexY2.push(i);
        indexX2.push(j);
      }
    }
  }
  var langkahX=[];
  var langkahY=[];
  var langkah=[];
  for(i=0;i<indexX2.length;i++) {
    if(indexX===0 && indexX2[i]==strArr.length-1) {
      langkahX[i]=1;
      langkahY[i]=Math.abs((indexY2[i]-indexY));
    } else if(indexY===0 && indexY2[i]==strArr.length-1) {
      langkahY[i]=1;
      langkahX[i]=Math.abs((indexX2[i]-indexX));
    } else {
      langkahX[i]=Math.abs((indexX2[i]-indexX));
      langkahY[i]=Math.abs((indexY2[i]-indexY));
    }
    langkah[i]=langkahY[i]+langkahX[i];
  }
  langkah.sort(function(a,b){return a-b});
  if(langkah[0]===undefined) return 0; else return langkah[0];
}

// keep this function call here
ClosestEnemyII(readline());
