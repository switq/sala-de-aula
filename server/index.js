require('dotenv').config();
const express = require('express');
const path = require("path");
const http = require('http');
const socketSetup = require('./socketHandlers');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

// Configura Socket.IO
socketSetup(server);

// Servir arquivos estáticos em produção
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    const indexFile = path.join(__dirname, "dist", "index.html");
    return res.sendFile(indexFile);
  });
}

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
