var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/paninaro.jpeg') {
      myImage.setAttribute ('src','images/truzzi.jpeg');
    } else {
      myImage.setAttribute ('src','images/paninaro.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ' is learning web development ';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ' is learning web development ';
}

myButton.onclick = function() {
  setUserName();
}
