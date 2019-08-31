let menorQueCincoAnos = document.querySelector('#idadeCrianca');
let nome = document.querySelector('#nome');
let dataChegada = document.querySelector('#inData');
let dataSaida = document.querySelector('#outData');
let tipoQuarto = document.querySelector('#tipoQuarto');
let tipoQuarto2 = document.querySelector('#tipoQuarto2');
let tipoQuarto3 = document.querySelector('#tipoQuarto3');

$(document).ready(function () {

    function calcularEstadia(){
        let dataIn = new Date(dataChegada.value);
        let dataOut = new Date(dataSaida.value);
        let total = 0;
        let soma = 0;
        const dia = 24 * 60 * 60 * 1000;
        let nDias = (dataOut.getTime() - dataIn.getTime())/dia;

        if (tipoQuarto.value == 1) soma += 139;
        if (tipoQuarto.value == 2) soma += 220;
        if (tipoQuarto.value == 3) soma += 340;

        if (tipoQuarto2.value == 1) soma += 139;
        if (tipoQuarto2.value == 2) soma += 220;
        if (tipoQuarto2.value == 3) soma += 340;

        if (tipoQuarto3.value == 1) soma += 139;
        if (tipoQuarto3.value == 2) soma += 220;
        if (tipoQuarto3.value == 3) soma += 340;

        if (menorQueCincoAnos.value == 2) soma += 30;

        total = soma*nDias;

        return total;
    }

    $('#btnReserva').click(function(){
        let result = calcularEstadia();
        alert(`${nome.value}, o valor total da reserva ficará em R$${calcularEstadia()},00`);
    });
});