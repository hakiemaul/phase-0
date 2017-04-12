// Challenge
// Using the JavaScript language, have the function TimeDifference(strArr)
// read the array of strings stored in strArr which will be an unsorted list of
// times in a twelve-hour format like so: HH:MM(am/pm). Your goal is to determine
// the smallest difference in minutes between two of the times in the list. For
// example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your
// program should return 40 because the smallest difference is between 1:30pm
// and 2:10pm with a difference of 40 minutes. The input array will always
// contain at least two elements and all of the elements will be in the correct
// format and unique.

// Sample Test Cases
// Input:"1:10pm", "4:40am", "5:00pm"
// Output:230

// Input:"10:00am", "11:45pm", "5:00am", "12:01am"
// Output:16

// By: Aulia Hakiem
// Test Case Point: 5

function TimeDifference(strArr) {
  var jam=[];
  var menit=[];
  var waktu=[];
  for(var i=0;i<strArr.length;i++) {
    for(var j=0;j<strArr[i].length;j++) {
      if(strArr[i][j]==':') {
        //cari jam dan menit
        jam[i]=Number(strArr[i][j-2]+strArr[i][j-1]);
        menit[i]=Number(strArr[i][j+1]+strArr[i][j+2]);
        if(isNaN(jam[i])) jam[i]=Number(strArr[i][j-1]);
        //ganti kondisi 24 jam buat case pm dan 12xx am
        if(strArr[i][j+3]=='p' && jam[i]!=12) jam[i]+=12;
        if(strArr[i][j+3]=='a' && jam[i]==12) jam[i]=0;
        //diganti jadi menit
        waktu[i]=(jam[i]*60)+menit[i];
      }
    }
  }
  waktu.sort(function(a,b){return a-b})
  var selisih=[];
  for(i=0;i<waktu.length;i++) {
    //selisih waktu pertama dan terakhir
    if(i===0) {
      selisih[i]=1440+(waktu[i]-waktu[waktu.length-1]);
    } else {
      //selisih yang lain
      selisih[i]=waktu[i]-waktu[i-1];
    }
  }
  selisih.sort(function(a,b){return a-b})
  return selisih[0];
}

TimeDifference(readline())
