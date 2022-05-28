const express = require('express');
const io = require('socket.io-client');

const server = express();

const socket = io('http://localhost:5043');
socket.on('command', command => console.log(command));

server.listen(3050, () => console.log('Listening on port 3050'));