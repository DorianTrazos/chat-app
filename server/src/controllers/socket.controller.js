const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

io.on('connection', client => {
  client.on('client-message', data => {
    console.log(data);

    io.emit('server-message', data);
  });

  // console.log(`✅ Usuario conectado: ${client.id}`);

  client.on('disconnect', () => {
    // console.log(`❌ Usuario desconectado: ${client.id}`);
  });
});

module.exports = server;
