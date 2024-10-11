const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } });

const PORT = 3001;

let activeUsers = [];

// Função para enviar a lista de usuários ativos para todos os clientes
const updateActiveUsers = () => {
  io.emit('active_users', activeUsers);
};

io.on('connection', socket => {
  console.log('Usuário conectado!', socket.id);

  // Quando o cliente define o username
  socket.on('set_username', username => {
    socket.data.username = username;

    // Adiciona o usuário à lista de ativos
    activeUsers.push({ id: socket.id, username });

    // Atualiza todos os clientes com a lista de usuários ativos
    updateActiveUsers();
  });

  // Quando o cliente envia uma mensagem
  socket.on('message', text => {
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
  });

  // Quando o cliente desconecta
  socket.on('disconnect', reason => {
    console.log('Usuário desconectado!', socket.id);

    // Remove o usuário da lista de ativos
    activeUsers = activeUsers.filter(user => user.id !== socket.id);

    // Atualiza todos os clientes com a nova lista de usuários ativos
    updateActiveUsers();
  });
});

server.listen(PORT, () => console.log('Server running...'));
