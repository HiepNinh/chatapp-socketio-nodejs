const http = require('http');
const socketio = require('socket.io');

module.exports = class SocketIO {
    constructor(app){
        this.server = http.createServer(app);
        this.io = socketio(this.server, {
            cors: {
              origin: '*',
              methods: ['GET', 'POST']
            }
        });
    }

    onConnection = (socketHandler) => {
        this.io.on('connection', (socket) => {
            socketHandler(socket);
        });
    }
}