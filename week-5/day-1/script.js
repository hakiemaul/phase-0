var pageFillElement = document.getElementById("fill-me");
var pageChangeElement = document.getElementsByClassName("change-all-of-me");

// isi element dengan ID "fill-me"
pageFillElement.innerHTML = "HALO!";

// isi element dengan class "change-all-of-me" dengan loop
for(var i=0;i<pageChangeElement.length;i++) {
  pageChangeElement[i].innerHTML = "HALO JUGA!";
}

// ganti element heading h2
document.getElementsByTagName("h2")[0].innerHTML = 'Apa Kabar!'
