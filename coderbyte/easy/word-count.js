// Have the function WordCount(str) take the str string parameter being passed
// and return the number of words the string contains (e.g. "Never eat shredded
// wheat or cake" would return 6). Words will be separated by single spaces.

// By: Aulia Hakiem
// Test Case Point: 5

function WordCount(str) {
  //menghitung spasi dengan cara menghitung jumlah kata yang ada dalam string
  var jumlahSpasi=str.split(' ').length;
  return jumlahSpasi;
}

// keep this function call here
WordCount(readline());
