var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado al servidor');
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Claudio',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Callback desde el server', resp)
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})