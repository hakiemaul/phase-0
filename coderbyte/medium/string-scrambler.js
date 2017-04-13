function StringScramble(str1,str2) {
  var tumbal1=str1;
  var tumbal2=[];
  for(var i=0;i<str2.length;i++) {
    for(var j=0;j<str1.length;j++) {
      if(str1[j]==str2[i]) {
        tumbal2.push(str1[j]);
        str1=str1.replace(str1[j],'.');
      }
    }
  }
  var tes=tumbal2.join('');
  if(tes.length>=str2.length) return true;
  return false;
}

// keep this function call here
StringScramble("cdore","coder");
