// Have the function NextPalindrome(num) take the num parameter being passed
// and return the next largest palindromic number. The input can be any positive
// integer. For example: if num is 24, then your program should return 33
// because that is the next largest number that is a palindrome.

// By: Aulia Hakiem
// Test Case Point: 5

function NextPalindrome(num) {
  var palNum=[];
  // buat database bilangan palindrome
  for(var i=0;i<600;i++) {
    var str=i.toString();
    var strBaru=[];
    if(i>10) {
      for(var j=0;j<str.length;j++) {
        strBaru[j]=str[str.length-1-j]
      }
      if(str==strBaru.join('')) palNum.push(i);
    }
    if(i<10) palNum.push(i);
    }
  // cek kondisi dari num
  for(i=0;i<palNum.length;i++) {
    if(palNum[i]>num) {
      return palNum[i];
    }
  }
}

// keep this function call here
NextPalindrome(readline());
