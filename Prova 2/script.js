let qtdQuarto = document.querySelector('#quartos');
let dataChegada = document.querySelector('#inData');
let dataSaida = document.querySelector('#outData');
let tipoQuarto = document.querySelector('#tipoQuarto');
let qtdQuarto = document.querySelector('#qtdQuarto');

$(document).ready(function () {

    function calcularEstadia(dataChegada, dataSaida, qtdQuarto, tipoQuarto){
        let dataIn = new Date(dataChegada);
        let dataOut = new Date(dataSaida);
        let total;
        let date = new Date(dataIn.getTime() - dataOut.getTime());
        let dia = date.getDay();

        if(tipoQuarto == 1){
            total = Number(qtdQuarto) * 139;
        }else if(tipoQuarto == 2){
            total = Number(qtdQuarto) * 220;
        }else{
            total = Number(qtdQuarto) * 340;
        }

        // let date = new Date(dataIn.getTime() - dataOut.getTime());

        // switch(tipoQuarto){
        //     case 0:
        //         total = qtdQuarto.value * qtdCrianca.value * date * 139;
                
        //     break;
        //     case 1:
        //         total = qtdQuarto.value * qtdCrianca.value * date * 220;
        //     break;
        //     case 2:
        //         total = qtdQuarto.value * qtdCrianca.value * date * 340;
        //     break;
        // }
        console.log(total);

        return total;
    }

    $('#btnReserva').click(function(){
        let result = calcularEstadia(dataChegada, dataSaida, qtdQuarto, tipoQuarto);
        console.log(result);
    });
});