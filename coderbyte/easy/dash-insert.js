// Have the function DashInsert(str) insert dashes ('-') between each two odd
// numbers in str. For example: if str is 454793 the output should be 4547-9-3.
// Don't count zero as an odd number.

// By: Aulia Hakiem
// Test Case Point: 5

function DashInsert(str) {
  //ubah string menjadi array, ubah tiap karakter dalam array menjadi tipe data
  //integer
  str=str.split('');
  for(var i=0;i<str.length;i++) {
    str[i]=parseInt(str[i]);
  }
  for(i=0;i<(str.length-1);i++) {
    //cek kondisi apakah karakter bersebelahan memiliki angka ganjil
    if(str[i]%2==1 && str[i+1]%2==1) {
      //jika ya, pisahkan karakter dengan '-'
      var splice=str.splice(i+1,0,'-');
    }
  }
  str=str.join('');
  return str;
}

// keep this function call here
DashInsert(readline());
