// Using the JavaScript language, have the function OffLineMinimum(strArr) take
// the strArr parameter being passed which will be an array of integers ranging
// from 1...n and the letter "E" and return the correct subset based on the
// following rules. The input will be in the following format:
// ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E
// means take out the smallest integer currently in the whole set. When
// finished, your program should return that new set with integers separated
// by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"]
// then your program should return 4,1,5.

// By: Aulia Hakiem
// Test Case Point: 5

function OffLineMinimum(strArr) {
  var arrHasil=[];
  var arrNum=[];
  var hitung=0;
  for(var i=0;i<strArr.length;i++) {
    arrNum.push(Number(strArr[i]));
    if(strArr[i]=='E') {
      hitung++
      arrNum.sort();
      arrHasil.push(arrNum[0]);
      arrNum.splice(0,1);
      console.log(arrNum);
    }
  }
  return arrHasil.join(',')
}

// keep this function call here
OffLineMinimum(readline());
