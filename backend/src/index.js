const { app } = require("./app");
const http = require('http');
const socketio = require('socket.io');

const port = process.env.PORT || 80;
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on("messageSend", message => {
        io.emit("incommingMessage", message);
    });
});

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});