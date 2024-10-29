const getRandomItem = require('./utils/functions/getRandomItem');
require('dotenv').config();
const app = require('express')();
const path = require("path");
const server = require('http').createServer(app);
const { v4: uuid } = require("uuid");
const io = require('socket.io')(server, {
  cors: {
    origin: process.env.SOCKET_ORIGIN || 'http://localhost:5173',
    methods: ["GET", "POST"],
  }
});

const PORT = process.env.PORT || 3001; // Usa a porta do .env ou 3001 como fallback

let activeUsers = [];

const onJoin = ({ username, id, character }) => {
  let finalUsername = username;

  // Checa se o username já está em uso
  while (activeUsers.some(user => user.username === finalUsername)) {
    finalUsername = `Copy of ${finalUsername}`;
  }

  const disponibleDesks = [];
  for (let i = 0; i < 20; i++) {
    if (!activeUsers.some(({ desk }) => desk === i)) {
      disponibleDesks.push(i);
    }
  }

  const desk = getRandomItem(disponibleDesks);
  activeUsers.push({ username: finalUsername, id, character, desk });
  updateActiveUsers();
};

const updateActiveUsers = () => {
  io.emit('active_users', activeUsers);
};

io.on('connection', socket => {
  console.log('Usuário conectado!', socket.id);

  socket.on('set_user', ({ username, character }) => {
    socket.data.username = username;
    socket.data.character = character;

    onJoin({ id: socket.id, username, character });
    console.log(activeUsers);
  });

  socket.on('message', text => {
    io.emit('receive_message', {
      text,
      authorId: socket.id,
      author: socket.data.username,
      id: uuid(),
    });
  });

  socket.on('disconnect', reason => {
    console.log('Usuário desconectado!', socket.id);
    activeUsers = activeUsers.filter(user => user.id !== socket.id);
    updateActiveUsers();
  });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    const indexFile = path.join(__dirname, "dist", "index.html");
    return res.sendFile(indexFile);
  });
}

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
