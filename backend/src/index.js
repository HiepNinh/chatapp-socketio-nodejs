const { app } = require("./app");
const http = require('http');
// const socketio = require('socket.io');

const server = http.createServer(app);
const port = process.env.PORT || 80;

// io.on('connection', () => {
//     console.log("New connection");
// });

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});