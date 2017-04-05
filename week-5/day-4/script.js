function create(element, attribute, value) {
  var newElement = document.createElement(element);
  newElement.setAttribute(attribute, value);
  return newElement;
}

function createText(element, text) {
  var newText = document.createElement(element);
  var textValue = document.createTextNode(text);
  newText.appendChild(textValue);
  return newText;
}

var mainDiv = document.getElementById('main');

var contentDiv = create('div', 'id', 'content')
mainDiv.appendChild(contentDiv);

var contentPostDiv = create('div', 'class', 'content-post');
contentDiv.appendChild(contentPostDiv);

var h1 = createText('h1', 'Judul Post');
contentPostDiv.appendChild(h1);

var span = createText('span', 'Published on 12 May 2016')
contentPostDiv.appendChild(span);

var p = createText('p', 'Lorem Ipsum Dolor Sit Amet')
contentPostDiv.appendChild(p);

var shareButton = create('button', 'class', 'share-post-button');
var shareText = document.createTextNode('Share this Post');
shareButton.appendChild(shareText);
contentPostDiv.appendChild(shareButton);

var contentPostDiv = create('div', 'class', 'content-post');
contentDiv.appendChild(contentPostDiv);

var h1 = createText('h1', 'Judul Post 2');
contentPostDiv.appendChild(h1);

var span = createText('span', 'Published on 13 May 2016');
contentPostDiv.appendChild(span);

var p = createText('p', 'Lorem Ipsum Dolor Sit Amet');
contentPostDiv.appendChild(p);

var shareButton2 = create('button', 'class', 'share-post-button');
var shareText = document.createTextNode('Share this Post');
shareButton2.appendChild(shareText);
contentPostDiv.appendChild(shareButton2);

shareButton.addEventListener('click', function() {
  alert('You have shared this post!');
})

shareButton2.addEventListener('click', function() {
  alert('You have shared this post!');
})
