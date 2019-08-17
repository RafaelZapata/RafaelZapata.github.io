let action1 = document.querySelector('#enlace_1');
let action2 = document.querySelector('#enlace_2');
let action3 = document.querySelector('#enlace_3');

action1.addEventListener('click', () => { hideContent(action1, 'conteudo_1') }, false);
action2.addEventListener('click', () => { hideContent(action2, 'conteudo_2') }, false);
action3.addEventListener('click', () => { hideContent(action3, 'conteudo_3') }, false);

function hideContent(action, id){
    var pElement = document.getElementById(id);
    let display = pElement.style.display;
    if(display == 'none'){
        pElement.style.display = 'block';
        action.textContent = 'Ocultar Conteudo';
    }else{
        pElement.style.display = 'none';
        action.textContent = 'Mostrar Conteudo';
    }
}
