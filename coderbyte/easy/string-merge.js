// Have the function StringMerge(str) read the str parameter being passed which
// will contain a large string of alphanumeric characters with a single
// asterisk character splitting the string evenly into two separate strings.
// Your goal is to return a new string by pairing up the characters in the
// corresponding locations in both strings. For example: if str is "abc1*kyoo"
// then your program should return the string akbyco1o because a pairs with k,
// b pairs with y, etc. The string will always split evenly with the asterisk
// in the center. Use the Parameter Testing feature in the box below to test
// your code with different arguments.

// By: Aulia Hakiem
// Test Case Point: 5

function StringMerge(str) {
  var a='';
  var b='';
  //buat string hingga setengah panjang str
  for(var i=0;i<(str.length/2)-1;i++) {
    a=a+str[i];
  }
  //buat string dari setengah panjang str
  for(var j=i+1;j<str.length;j++) {
    b=b+str[j];
  }
  var c=[]
  //pasangkan string a dengan b
  for(i=0;i<a.length;i++) {
    c[i]=a[i]+b[i];
  }
  c=c.join('')
  return c;
}

// keep this function call here
StringMerge(readline());
