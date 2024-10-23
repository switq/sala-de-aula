const getRandomItem = require('./utils/functions/getRandomItem');
 
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } });

const PORT = 3001;

let activeUsers = [];

const onJoin = ({ username, id, character }) => {
  const disponibleDesks = [];
  for (let i = 0; i < 20; i++)
    if (!activeUsers.some(({ desk }) => desk == i))
      disponibleDesks.push(i);

  const desk = getRandomItem(disponibleDesks);
  activeUsers.push({ username, id, character, desk });
  updateActiveUsers();
}

const updateActiveUsers = () => {
  io.emit('active_users', activeUsers);
};

io.on('connection', socket => {

  console.log('Usuário conectado!', socket.id);

  socket.on('set_user', ({ username, character }) => {
    socket.data.username = username;
    socket.data.character = character;

    onJoin({ id: socket.id, username, character });
    console.log(activeUsers)
  });

  socket.on('message', text => {
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
  });

  socket.on('disconnect', reason => {
    console.log('Usuário desconectado!', socket.id);

    activeUsers = activeUsers.filter(user => user.id !== socket.id);

    updateActiveUsers();
  });
});

server.listen(PORT, () => console.log('Server running...'));
