/*
  Este es el código del backend de mensajes automatizados
  API en expressjs con socket.io para la comunicación por websocket con el marco LED
  WIP En un futuro esta API debería tener endpoint para la gestión de diferentes servicios o módulos para cargar datos en la pantalla. 
*/
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  
});

io.on('connection', (socket) => {
    //Por User se entiende ahora mismo tanto un posible usuario que quiera enviar un mensaje a la pantalla, como la propia pantalla LED.
    console.log('A new user connected!');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('sendContent', () => {
      console.log("Sending data to LED screen");
    })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});