"use strict"
function BinaryConverter(str) {
  let dec=parseInt(str, 2);
  return dec.toString();
}

// keep this function call here
BinaryConverter(readline());
