//variables

const displayUp = document.querySelector('.displayAction');
const insertText = document.querySelector('.text-input');
const buttonAdd = document.querySelector('.buttonAdd');

const displayDown = document.querySelector('.displayItems');
const theList = document.querySelector('.grocery-list');
const clearAll = document.querySelector('.clearAll');


// buttons - eventlistener

buttonAdd.addEventListener('click', add);


clearAll.addEventListener('click', clear);
//functions

function add() {
let value = insertText.value;
console.log(value);
}

function clear(){
let value = insertText.value;
console.log(value);
}