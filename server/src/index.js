const server = require('./controllers/socket.controller');

server.listen(3000, () => {
  console.log('🚀 Servidor escuchando en http://localhost:3000');
});
