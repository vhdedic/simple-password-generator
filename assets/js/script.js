let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
const lowerDOM = document.querySelector('#lower');
const upperDOM = document.querySelector('#upper');
const numbersDOM = document.querySelector('#numbers');
const specialDOM = document.querySelector('#special');
const lengthDOM = document.querySelector('#length');
const numberDOM = document.querySelector('#number');
let charsArr = [];
const buttonDOM = document.querySelector('#button');
const listDOM = document.querySelector('#list');

buttonDOM.addEventListener('click', (e) => {
  
  e.preventDefault();
  charsArr.push(...lowerArr);
  
  if (upperDOM.checked) {
    charsArr.push(...upperArr);
  }

  if (numbersDOM.checked) {
    charsArr.push(...numbersArr);
  } 
  
  if (specialDOM.checked) {
    charsArr.push(...specialArr);
  }
  
  let lengthValue = lengthDOM.value;
  let numberValue = numberDOM.value;
    
  for (let i = 0; i < numberValue; i++) {
    let itemString = '';
    let listItem = document.createElement('li');
    
    for (let j = 0; j < lengthValue; j++) {
      let randomNum = random(charsArr.length);
      itemString += charsArr[randomNum];
    }

    listItem.textContent = itemString;
    listDOM.appendChild(listItem);
  }
});

function random(num) {
  return Math.floor(Math.random() * num);
}
