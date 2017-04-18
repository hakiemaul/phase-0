// Array 2 Competency Test

function initialGrouping(studentsArr) {
  var tampung=[];
  for(var i=0;i<studentsArr.length;i++) {
    tampung[i]=[studentsArr[i][0]];
    tampung[i].push(studentsArr[i]);
  }
  var gabung=[];
  for(i=0;i<tampung.length;i++) {
    for(var j=0;j<tampung.length;j++) {
      if(tampung[i][0]==tampung[j][0] && i!=j && tampung[i].length<4 && tampung[j].length<4) {
        tampung[i]=tampung[i].concat(tampung[j]);
        tampung.splice(j,1);
        tampung[i].splice(2,1);
      }
    }
  }
  return tampung;
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
