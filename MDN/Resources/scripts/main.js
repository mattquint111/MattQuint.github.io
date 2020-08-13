let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://cdn0.iconfinder.com/data/icons/mozilla-icons/256/firefox_png.png') {
        myImage.setAttribute('src', 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/nightly/logo-lg-high-res.2ae024a36eed.png');
    } else {
        myImage.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/mozilla-icons/256/firefox_png.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
}