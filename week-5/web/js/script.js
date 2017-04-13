var click=document.getElementById("click"),
    hover=document.getElementById("hover"),
    scroll=document.getElementById("scroll");

var clickPar=click.parentNode;
var h1Click=clickPar.previousElementSibling;
var hoverPar=hover.parentNode;
var h1Hover=hoverPar.previousElementSibling;

click.addEventListener('click', function() {
  h1Click.textContent=(Number(h1Click.textContent))+1;
  if(h1Click.textContent==1) {
    var newText=document.createElement("p");
    var textValue=document.createTextNode("Click function runs well!");
    newText.appendChild(textValue);
    newText.setAttribute("class", "text-center text-success");
    newText.setAttribute("id", "clickresult");
    clickPar.parentNode.appendChild(newText);
  }
});

hover.addEventListener('mouseenter', function() {
  h1Hover.textContent=(Number(h1Hover.textContent))+1;
  if(h1Hover.textContent==1) {
    var newText=document.createElement("p");
    var textValue=document.createTextNode("Pointing function runs well!");
    newText.appendChild(textValue);
    newText.setAttribute("class", "text-center text-success");
    newText.setAttribute("id", "hoverresult");
    hoverPar.parentNode.appendChild(newText);
  }
});

var mainForm=document.getElementById("main-form");
var testArea=document.getElementById("test");
var result=document.getElementById("result");
var drag=document.getElementById("div1");

mainForm.addEventListener('submit', function() {
  if(result.nextElementSibling!==null && result.nextElementSibling!==testArea.value &&testArea.value!=="") {
    result.nextElementSibling.innerHTML=testArea.value;
  }
  if(result.nextElementSibling===null) {
    var newText=document.createElement("p");
    var textValue=document.createTextNode(testArea.value);
    newText.appendChild(textValue);
    newText.setAttribute("class", "text-center text-primary");
    newText.setAttribute("id", "typeresult");
    result.parentNode.appendChild(newText);
  }
  mainForm.reset();
});


console.log(submit.nextElementSibling);
