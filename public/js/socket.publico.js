var socket = io();

var lbl1 = $('#lblTicket1');
var lbl2 = $('#lblTicket2');
var lbl3 = $('#lblTicket3');
var lbl4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lbl1, lbl2, lbl3, lbl4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', function(data){
    console.log(data);
    actualizarHtml(data.ultimos4);
});

socket.on('ultimos4', function( data ){
    console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHtml(data.ultimos4);
});


function actualizarHtml(ultimos4){

    for( var i = 0; i <= ultimos4.length -1; i++){
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}