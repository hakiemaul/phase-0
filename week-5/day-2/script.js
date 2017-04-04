// akses anak pertama dari eldest-parent
var firstGen = document.getElementById("eldest-parent");
var secondGen = firstGen.children;

secondGen[0].innerHTML = "Diakses Melalui Eldest Parent";

// akses sibling dari a-child
var lastGen = document.getElementById("a-child");

var firstLastGen = lastGen.previousElementSibling;
firstLastGen.innerHTML = "Diakses Melalui a Child"

var lastLastGen = lastGen.nextElementSibling;
lastLastGen.innerHTML = "Diakses Melalui a Child"

// akses anak terakhir dari eldest-parent melalui a-child
var lastGenParent = lastGen.parentNode;
var lastGenGrandParent = lastGenParent.parentNode;

var lastGenGrandParentYoung = lastGenGrandParent.nextElementSibling;
lastGenGrandParentYoung.innerHTML = "Diakses Melalui a Child"
