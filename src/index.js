import './style.css';

let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
const upperDOM = document.querySelector('#upper');
const numbersDOM = document.querySelector('#numbers');
const specialDOM = document.querySelector('#special');
const lengthDOM = document.querySelector('#length');
const numberDOM = document.querySelector('#number');
let charsArr = [];
const btnSubmitDOM = document.querySelector('#btnSubmit');
const listDOM = document.querySelector('#list');

btnSubmitDOM.addEventListener('click', (e) => {
  e.preventDefault();
  listDOM.textContent = '';
  shuffle(lowerArr);
  charsArr.push(...lowerArr);
  
  if (upperDOM.checked) {
    shuffle(upperArr);
    charsArr.push(...upperArr);
  }

  if (numbersDOM.checked) {
    shuffle(numbersArr);
    charsArr.push(...numbersArr);
  } 
  
  if (specialDOM.checked) {
    shuffle(specialArr);
    charsArr.push(...specialArr);
  }
  
  let lengthValue = lengthDOM.value;
  let numberValue = numberDOM.value;
  let randomValue = random(5);
  let temporaryArr = [];

  for (randomValue; randomValue < 8; randomValue++) {
    temporaryArr.push(...charsArr);
  }

  charsArr = temporaryArr;
  randomValue = undefined;
  temporaryArr = [];
  
  for (let i = 0; i < numberValue; i++) {
    let itemString = '';
    let listItem = document.createElement('li');
    shuffle(charsArr);
    
    for (let j = 0; j < lengthValue; j++) {
      let randomNum = random(charsArr.length);
      itemString += charsArr[randomNum];
    }

    listItem.textContent = itemString;
    listDOM.appendChild(listItem);
  }
  
  charsArr = [];
});

function random(num) {
  return Math.floor(Math.random() * num);
}

function shuffle(array) {
  let arrayLength = array.length;
  let temporaryValue;
  let randomIndex;

  while (arrayLength) {
    randomIndex = Math.floor(Math.random() * arrayLength--);
    temporaryValue = array[arrayLength];
    array[arrayLength] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
