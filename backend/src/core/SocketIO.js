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

        this.socketInRooms = {};
    }

    onConnection = (socketHandler) => {
        this.io.on('connection', (socket) => {
            socketHandler(socket);
        });
    }

    trackingSpecificSocket = (socketId, trackingData) => {
        this.socketInRooms[socketId] = trackingData;
    }

    unTrackingSpecificSocket = (socketId) => {
        const untrackedData = this.socketInRooms[socketId];
        if(!untrackedData) return;

        delete this.socketInRooms[socketId];
        return untrackedData;
    }
}