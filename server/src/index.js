const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.get('/', (_, res) => res.send('Servidor funcionando ✅'));

io.on('connection', socket => {
  console.log('🔌 Usuario conectado:', socket.id);

  socket.on('mensaje', data => {
    console.log(`📩 Mensaje recibido:`, data);
    socket.broadcast.emit('mensaje', data);
  });

  socket.on('disconnect', () => {
    console.log('❌ Usuario desconectado:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('🚀 Backend escuchando en http://localhost:3000');
});
