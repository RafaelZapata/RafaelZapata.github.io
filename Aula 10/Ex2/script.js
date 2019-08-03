let btnElement = document.querySelector('#btn');
let inputElement = document.querySelector('#email');

btnElement.onclick = function validarEmail(){
    let email = inputElement.value;
    
    let divArroba = email.split('@');
    let divPonto = email[1].split('.');

    console.log(divArroba);
    console.log(divPonto);
}