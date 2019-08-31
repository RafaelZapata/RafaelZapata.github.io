// Criar uma função que iria chamar um prompt que ira receber uma data e irá calcular a diferença da
// data atual e a data digitada

let btnElement = document.querySelector('#btn');
let pElement = document.querySelector('#texto')

function pegarData(){
    return (prompt('Insira uma data'));
}

btnElement.onclick = function calcularData() {
    
    let dataDigitada = new Date(pegarData());
    let data = new Date();

    let date = new Date(data.getTime() - dataDigitada.getTime());

    let day = date.getDay();
    let month = date.getMonth();
    let year =date.getFullYear() - 1970;

    pElement.innerHTML = `Dias: ${date} Meses: ${month} Anos: ${year}`;
}

