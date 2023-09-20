
const express = require("express");
// calling express server with app
const app = express();

const PORT = 8888;

// require http server

const http = require('http');

// combine http server and express server

const server = http.createServer(app);

// now i want to install socket.io

const {Server} = require('socket.io');

// instanciate obj for my server

const io = new Server(server);

io.on("connection", (socket) => {
    socket.on('secret message',(data)=>{
        io.emit('secret message',data);
    })
});
app.use(express.static('public'));
server.listen(PORT);