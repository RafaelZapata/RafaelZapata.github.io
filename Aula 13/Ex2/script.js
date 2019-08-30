let listElement = document.querySelector('#list ul')
let inputElement = document.querySelector('#list input')
let btnElement = document.querySelector('#list button')

btnElement.addEventListener('click', addToList, false);

function addToList(){
    let newItem = document.createElement('li');
    newItem.textContent = inputElement.value;

    listElement.appendChild(newItem);

    inputElement.value = '';
}

let imgElement = document.querySelector('img')
imgElement.addEventListener('click', turnOn, false);

function turnOn(){
    if (this.src.includes('on')){
        imgElement.src = './img/lampada_off.gif';
    }else{
        imgElement.src = './img/lampada_on.gif';
    }
}