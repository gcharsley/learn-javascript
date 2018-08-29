//Example 1 - Changing H1 text
/****** 
var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!!";
******/

// Example 2 - Changing images when image is clicked
/******
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/image2.jpg');
    } else if (mySrc === 'images/image2.jpg') {
      myImage.setAttribute ('src','images/image3.jpg');
    } else if(mySrc === 'images/image3.jpg') {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
 }
******/

// Example 3
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
