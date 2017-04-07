// Have the function CountingMinutesI(str) take the str parameter being passed
// which will be two times (each properly formatted with a colon and am or pm)
// separated by a hyphen and return the total number of minutes between the two
// times. The time will be in a 12 hour clock format. For example: if str is
// 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the
// output should be 1320.

// By: Aulia Hakiem
// Test Case Point: 5

function CountingMinutesI(str) {
  var arr=str.split('-');
  var jam=[];
  var menit=[];
  var waktu=[];
  for(var i=0;i<arr.length;i++) {
    for(var j=0;j<arr[i].length;j++) {
      if(arr[i][j]==':') {
        //cari jam dan menit
        jam[i]=Number(arr[i][j-2]+arr[i][j-1]);
        menit[i]=Number(arr[i][j+1]+arr[i][j+2]);
        if(isNaN(jam[i])) jam[i]=Number(arr[i][j-1]);
        //ganti kondisi 24 jam buat case pm dan 12xx am
        if(arr[i][j+3]=='p' && jam[i]!=12) jam[i]+=12;
        if(arr[i][j+3]=='a' && jam[i]==12) jam[i]=0;
        //diganti jadi menit
        waktu[i]=(jam[i]*60)+menit[i];
      }
    }
  }
  var selisih=waktu[1]-waktu[0];
  if(selisih<0) selisih+=1440;
  return selisih;
}

// keep this function call here
CountingMinutesI(readline());
