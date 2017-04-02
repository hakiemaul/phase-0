// Have the function QuestionsMarks(str) take the str string parameter, which
// will contain single digit numbers, letters, and question marks, and check if
// there are exactly 3 question marks between every pair of two numbers that add
// up to 10. If so, then your program should return the string true, otherwise
// it should return the string false. If there aren't any two numbers that add
// up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should
// return true because there are exactly 3 question marks between 6 and 4, and
// 3 question marks between 5 and 5 at the end of the string.

// By: Aulia Hakiem
// Test Case Point: 4
// Incorrect:"9???1???9??1???9". The correct answer is false.
//           "5??aaaaaaaaaaaaaaaaaaa?5?5". The correct answer is false.

function QuestionsMarks(str) {
  //hanya gunakan karakter angka dan tanda tanya
  var arr=str.match(/[?\d]/g);
  for(var i=0;i<arr.length;i++) {
    //cek jika pada indeks i terdapat angka
    if(Number(arr[i])) {
      //cek jika dua angka yg terpisah 3 indeks berjumlah 10
      if(Number(arr[i])+Number(arr[i+4])===10) {
        //cek jika dua angka tersebut dipisahkan dengan 3 tanda tanya
        if(arr[i+1]===arr[i+2] && arr[i+2]===arr[i+3]) {
          return true;
        }
      }
    }
  }
  return false;
}

// keep this function call here
QuestionsMarks(readline());
