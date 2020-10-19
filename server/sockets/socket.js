const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();


io.on('connection', (client) =>{
    console.log('Usuario conectado');

    client.emit('estadoActual', {
            message: ticketControl.getUltimoTicket(),
            ultimos4: ticketControl.getUltimos4()
    });

    client.on('siguienteTicket', (data, callback) => {
        callback({
            message: ticketControl.siguienteTicket()
        });
    });

    client.on('atenderTicket', (data, callback) => {
        if( !data.escritorio){
            callback({
                err:{
                    message: 'El escritorio es necesario'
                }
            })
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);

        client.broadcast.emit('ultimos4',{
            ultimos4: ticketControl.ultimos4
        });

    });

});