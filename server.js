const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 8080;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
const publicPath = path.join(__dirname, './build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(publicPath);
});

io.on('connection', (socket) => {
    console.log("Socket connected");

    socket.on('sendMessage', data => {
        // console.log('Message: ', message);
        socket.broadcast.emit('sendMessage', data);
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});