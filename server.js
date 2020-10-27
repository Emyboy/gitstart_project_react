const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const port = process.env.PORT || 8080
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
    console.log("Socket connected");

    socket.on('sendMessage', message => {
        // console.log('Message: ', message);
        socket.emit('sendMessage', message)
    });
});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})