let btnElement = document.querySelector('#btn');
let inputElement = document.querySelector('#email');

btnElement.onclick = function validarEmail(){
    let email = inputElement.value;
    
    let divArroba = email.split('@');
    let divPonto = divArroba[1].split('.');

    let casePonto = divPonto.length;

    if(divArroba[0] == '' || divArroba.length != 2 || divPonto[0] == '' || divPonto[1] == '') {
        alert('Email invalido');
    } else {
        switch (casePonto) {
            case 2:
                alert('Email valido');
                break;
            case 3:
                (divPonto[2].length > 2) ? alert('Email invalido') : alert('Email valido'); 
                break;
            default:
                break;
        }
    }
}