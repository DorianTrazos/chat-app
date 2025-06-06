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

// Mapa de userId -> socket.id
const usuariosConectados = new Map();

io.use((socket, next) => {
  const { userId } = socket.handshake.auth;
  if (!userId) return next(new Error('No userId provided'));
  socket.id = userId;
  next();
});

io.on('connection', socket => {
  console.log(
    `✅ Usuario conectado: ${socket.userId} (socket.id: ${socket.id})`
  );
  usuariosConectados.set(socket.userId, socket.id);

  socket.on('mensaje', data => {
    console.log(`💬 Mensaje de ${socket.userId}:`, data);
    socket.broadcast.emit('mensaje', data);
  });

  socket.on('disconnect', () => {
    console.log(`❌ Usuario desconectado: ${socket.id}`);
    usuariosConectados.delete(socket.id);
  });
});

server.listen(3000, () => {
  console.log('🚀 Servidor escuchando en http://localhost:3000');
});
