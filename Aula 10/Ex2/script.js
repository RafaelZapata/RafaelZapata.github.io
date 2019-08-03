let btnElement = document.querySelector('#btn');
let inputElement = document.querySelector('#email');

btnElement.onclick = function validarEmail(){
    let email = inputElement.value;
    
    let divArroba = email.split('@');
    let divPonto = divArroba[1].split('.');

    console.log(divPonto);

    if(divArroba[0] < 1 || divArroba.length != 2 || divPonto[0] < 1 || divPonto.length != 2) {
        alert('Email invalido');
    } else {
        alert('Email valido');
    }
}