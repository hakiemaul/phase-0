// Have the function MeanMode(arr) take the array of numbers stored in arr and
// return 1 if the mode equals the mean, 0 if they don't equal each other
// (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
// The array will not be empty, will only contain positive integers, and will not
// contain more than one mode.

// By: Aulia Hakiem
// Test Case Point: 5

function MeanMode(arr) {
  var mean=0;
  var mode=0;
  var jumlah=0;
  var numMapping={};
  for(var i=0;i<arr.length;i++) {
    //cari jumlah, hitung nilai rata-rata
    jumlah+=arr[i];
    mean=jumlah/arr.length;
    //mapping nilai angka dengan jumlah nilai tersebut dalam array (dibuat dalam
    //objek)
    if(numMapping[arr[i]]===undefined){
      numMapping[arr[i]]=0;
    }
      numMapping[arr[i]]+=1;
    }
  var greatestFreq=0;
  //looping untuk tiap angka dalam objek numMapping, menghasilkan nilai modus
  for(var x in numMapping){
    if(numMapping[x]>greatestFreq){
      greatestFreq=numMapping[x];
      mode=x;
    }
  }
  if(mode==mean) return 1; else return 0;
}

// keep this function call here
MeanMode(readline());
