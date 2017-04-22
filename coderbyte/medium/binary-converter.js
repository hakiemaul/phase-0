"use strict"
function BinaryConverter(str) {
  let dec=parseInt(str, 2);
  console.log(dec)
  return dec.toString();
}

// keep this function call here
BinaryConverter("100101");
