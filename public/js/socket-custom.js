
        var socket = io();

        //On es para escuchar suceso desconexion
        socket.on('connect', function () {
            console.log('conectado al servidor');
        });

        //On es para escuchar suceso desconexion
        socket.on('disconnect', function () {
            console.log('Se perdio la conexion con el server');
        });

        //enviar informacion con Emit 
        socket.emit('enviarMensaje', {
            usuario: 'Cristian',
            mensaje: 'Hola que tal',
        }, function (resp) {
            console.log('Respuesta del servidor: ', resp);
        });

        //Escuchar informacion con ON
        socket.on('enviarMensaje', function (mensaje) {
            console.log('Servidor: ', mensaje);
        });
    