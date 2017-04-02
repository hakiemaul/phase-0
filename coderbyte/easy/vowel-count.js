// Have the function VowelCount(str) take the str string parameter being passed
// and return the number of vowels the string contains (ie. "All cows eat grass
// and moo" would return 8). Do not count y as a vowel for this challenge.

// By: Aulia Hakiem
// Test Case Point: 5

function VowelCount(str) {
  str=str.toLowerCase();
  var vowels=0;
  //cek kondisi tiap bagian string, tambah variabel penghitung jika sesuai
  for (var i=0;i<str.length;i++) {
      switch (str[i]) {
          case 'a':
          case 'i':
          case 'u':
          case 'e':
          case 'o':
            vowels++;
            break;
          default:
            break;
      }
  }
  return vowels;
}

// keep this function call here
VowelCount(readline());
