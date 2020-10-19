// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
   console.log('Desconectado del servidor'); 
});

socket.on('estadoActual', function( response ) {
    label.text(response.message);
});

$('button').on('click', function(){
    socket.emit('siguienteTicket', null, function( response ){
        label.text(response.message);
    });
});