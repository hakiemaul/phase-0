// Have the function RectangleArea(strArr) take the array of strings stored in
// strArr, which will only contain 4 elements and be in the form (x y) where x
// and y are both integers, and return the area of the rectangle formed by the 4
// points on a Cartesian grid. The 4 elements will be in arbitrary order. For
// example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program
// should return 6 because the width of the rectangle is 3 and the height is 2
// and the area of a rectangle is equal to the width * height.

// By: Aulia Hakiem
// Test Case Point: 5

function RectangleArea(strArr) {
  var arrBaru=[];
  var x=[];
  var y=[];
  //cari nilai x dan y dari 4 titik koordinat
  for(var i=0;i<strArr.length;i++) {
    var a=strArr[i].replace(/[\(\)]/g,'');
    var b=a.split(' ');
    x.push(Number(b[0]));
    y.push(Number(b[1]));
  }
  //urutkan dari yang terkecil
  y.sort(function(a,b){return a>b});
  x.sort(function(a,b){return a>b})
  //hitung luas segitiga
  var panjang=x[3]-x[0];
  var lebar=y[3]-y[0];
  var luas=panjang*lebar;
  return luas;
}

// keep this function call here
RectangleArea(readline());
