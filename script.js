const itemScreen = document.getElementById('item-screen');

const button = document.getElementById('main-button-hover');
const mainTopText = document.getElementById('main-top-label');
const buttonText = [document.getElementById('main-button-text'), document.getElementById('main-button-hover-text')]

const homeButtonText = 'REVEAL NOW';
const itemButtonText = 'BACK HOME';

const homeTopText = 'ENTRY TEST_';
const itemTopText = 'EXERCISE 01_';

let isOpenItem = false;

button.addEventListener('click', function() {
  if (isOpenItem) {
    buttonText.forEach((b) => b.innerText = homeButtonText);
    mainTopText.innerText = homeTopText;
    itemScreen.classList.remove('active');
    isOpenItem = false;
  } else {
    buttonText.forEach((b) => b.innerText = itemButtonText);
    mainTopText.innerText = itemTopText;
    itemScreen.classList.add('active');
    isOpenItem = true;
  }
});

document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
    e.target.classList.add('did-fade-in');
  }
});

document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
    e.target.classList.remove('did-fade-in');
  }
});