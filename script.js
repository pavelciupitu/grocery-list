//variables

const addItemsAction = document.querySelector('.displayAction');
const input = document.querySelector('.text-input');
const submit = document.querySelector('.buttonAdd');

const displayItemsAction = document.querySelector('.displayItems');
const list = document.querySelector('.grocery-list');
const clear = document.querySelector('.clearAll');


// buttons - eventlistener

submit.addEventListener('click', addItem);
document.addEventListener('DOMContentLoaded', displayStorage);
clear.addEventListener('click', clearAll);
list.addEventListener('click', removeSingleItem);
//clear.addEventListener('click', clear);
//functions

function addItem(event) {
    event.preventDefault();
    let value = input.value;
    // console.log(value);
    if(value === "") {
        showAction(addItemsAction,'Please add grocery item', false);
    } else {
        showAction(addItemsAction, `${value} aded to the list`, true);
        createItem(value);
        updateStorage(value);
    }
}

function showAction(element, text, value) {
    if (value === true) {
        element.classList.add('success');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('success');
        },4000 )
    }
    else {
        element.classList.add('alert');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('alert');
        },4000 )
    }
}

//!Create new item

function createItem(value) {
    let parent = document.createElement('div');
    parent.classList.add('grocery-item');
    parent.innerHTML = `                <h4 class="grocery-item__title">${value}</h4>
    <a href="#" class="grocery-item__delete">
        <i class="far fa-trash-alt"></i></a>`

    list.appendChild(parent);
}

//!Update Storage

function updateStorage(value) {
    let groceryList;
    let exists = localStorage.getItem('groceryList')

    if(exists) {
        groceryList = JSON.parse(localStorage.getItem('groceryList'))
    }
    else {
        groceryList = [];
    }
    groceryList.push(value);
    localStorage.setItem('groceryList', JSON.stringify(groceryList))
}



//! Display local storage

function displayStorage() {
    let exists = localStorage.getItem('groceryList');
    
    if(exists) {
        let storageItems = JSON.parse(localStorage.getItem('groceryList'));
        
        storageItems.forEach(function(element){
            createItem(element)
        })
    }
}

function clearAll(){
//delete for local storage
localStorage.removeItem('groceryList');

let items = document.querySelectorAll('.grocery-item')
if (items.length >0) {
    showAction(displayItemsAction, 'All items deleted', false)
    items.forEach(function (element) {
        list.removeChild(element);
    })
}
else {
    showAction(displayItemsAction, 'No more items to delete', true)
}
}

//! remove single item

function removeSingleItem() {
    event.preventDefault();
    
    let link = event.target.parentElement;
    if (link.classList.contains('grocery-item__delete')) {
        let text = link.previousElementSibling.innerHTML;
        let groceryItem = event.target.parentElement.parentElement;
        // remove from the list
        
        list.removeChild(groceryItem);
        showAction(displayItemsAction, `${text} has been deleted from the list`, true)
        
        //remove from the local storage
    }
}