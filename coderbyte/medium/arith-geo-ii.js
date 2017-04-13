 // Have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.

 // By: Aulia Hakiem
 // Test Case Point: 5
 
function ArithGeoII(arr) {
  var faktor=0;
  var arithver=[];
  for(var i=1;i<arr.length;i++) {
    faktor=arr[i]-arr[i-1];
    arithver.push(faktor);
  }
  if(arithver[0]==arithver[arr.length-2]) return 'Arithmetic';
  var geover=[];
  for(i=1;i<arr.length;i++) {
    faktor=Math.abs(arr[i]/arr[i-1]);
    geover.push(faktor);
  }
  geover.sort(function(a,b){return a-b});
  if(geover[0]==geover[arr.length-2]) return 'Geometric';
  return -1;
}

// keep this function call here
ArithGeoII(readline());
