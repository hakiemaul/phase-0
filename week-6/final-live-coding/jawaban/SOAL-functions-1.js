
function findMax(numberArr) {
  return numberArr.reduce((sebelum,sesudah) => {
    return sebelum>sesudah ? sebelum : sesudah;
  });
}

function findMin(numberArr) {
  return numberArr.reduce((sebelum,sesudah) => {
    return sebelum<sesudah ? sebelum : sesudah;
  });
}

function findMean(numberArr) {
  var jumlah=0;
  for(var i=0;i<numberArr.length;i++) {
    jumlah+=numberArr[i];
  }
  var mean=jumlah/numberArr.length;
  return Math.floor(mean);
}


function findOdds(numberArr) {
  var tampung=[];
  for(var i=0;i<numberArr.length;i++) {
    if(numberArr[i]%2!==0) {
      tampung.push(numberArr[i]);
    }
  }
  return tampung.join('-');
}

function findEvens(numberArr) {
  var tampung=[];
  for(var i=0;i<numberArr.length;i++) {
    if(numberArr[i]%2===0) {
      tampung.push(numberArr[i]);
    }
  }
  return tampung.join('-');
}

function numberProcessing(numberArr) {
  var max = findMax(numberArr);
  var min = findMin(numberArr);
  var mean = findMean(numberArr);
  var odds = findOdds(numberArr);
  var evens = findEvens(numberArr);
  return 'Min: ' + min + ', Max: ' + max + ', Mean: ' + mean + ', Odds: ' + odds + ', Evens: ' + evens;
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
