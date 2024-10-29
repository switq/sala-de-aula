const { v4: uuid } = require("uuid");
const getRandomItem = require('./utils/functions/getRandomItem');

let activeUsers = [];

// Função para atualizar os usuários ativos
const updateActiveUsers = (io) => {
    io.emit('active_users', activeUsers);
};

// Função para lidar com a entrada de um novo usuário
const onJoin = ({ io, username, id, character }) => {

    // Garante que o nome de usuário seja único
    let finalUsername = username;
    while (activeUsers.some(user => user.username === finalUsername)) {
        finalUsername = `Clone of ${finalUsername}`;
    }

    // Encontra uma mesa disponível
    const availableDesks = Array.from({ length: 20 }, (_, i) => i).filter(
        desk => !activeUsers.some(user => user.desk === desk)
    );

    const desk = getRandomItem(availableDesks);
    activeUsers.push({ username: finalUsername, id, character, desk, });
    updateActiveUsers(io);

    return { success: true };
};

// Configura os eventos do Socket.IO
const setupSocketHandlers = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: process.env.SOCKET_ORIGIN || 'http://localhost:5173',
            methods: ["GET", "POST"],
        }
    });

    io.on('connection', (socket) => {
        socket.on('set_user', ({ username, character }) => {
            socket.data = { username, character };

            const result = onJoin({
                io,
                id: socket.id,
                username,
                character,
            });

            if (!result.success) {
                socket.emit('error', 'Conexão bloqueada');
                socket.disconnect();
            } else {
                console.log(activeUsers);
            }
        });

        socket.on('message', (text) => {
            io.emit('receive_message', {
                text,
                authorId: socket.id,
                author: activeUsers.find(user => user.id === socket.id)?.username || 'Bananão',
                id: uuid(),
            });
        });

        socket.on('disconnect', () => {
            console.log('Usuário desconectado!', socket.id);
            activeUsers = activeUsers.filter(user => user.id !== socket.id);
            updateActiveUsers(io);
        });
    });
};

module.exports = setupSocketHandlers;
