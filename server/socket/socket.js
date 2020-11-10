const { io } = require('../server')


io.on('connection', (client) => {

    console.log('Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la APP'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (mensaje, callback) => {

        client.broadcast.emit('enviarMensaje', {
            usuario: mensaje.usuario,
            mensaje: mensaje.mensaje
        })


        if (callback) {
            callback({
                resp: 'todo salió ' + (mensaje.usuario ? 'bien' : 'mal')
            });

        }

    })


})