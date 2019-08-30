$(document).ready(function(){
    $('#enlace_1').click(function(){
        $('#conteudo_1').toggle();
        if ($('#conteudo_1').is(':visible')){
            $('#enlace_1').text('Ocultar conteudo');
        }else{
            $('#enlace_1').text('Mostrar conteudo');
        }
    });

    $('#enlace_2').click(function(){
        $('#conteudo_2').toggle();
        if ($('#conteudo_2').is(':visible')) {
            $('#enlace_2').text('Ocultar conteudo');
        } else {
            $('#enlace_2').text('Mostrar conteudo');
        }
    });

    $('#enlace_3').click(function(){
        $('#conteudo_3').toggle();
        if ($('#conteudo_3').is(':visible')) {
            $('#enlace_3').text('Ocultar conteudo');
        } else {
            $('#enlace_3').text('Mostrar conteudo');
        }
    });
});