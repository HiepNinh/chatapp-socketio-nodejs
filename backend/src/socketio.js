const FilterBadWords = require('bad-words');
const { app } = require("./app");
const SocketIO = require('./core/SocketIO');

const socketio = new SocketIO(app);

const socketHandler = (socket) => {
    socket.on('join', ({username, roomId}) => {
        socket.join(roomId);
        socketio.trackingSpecificSocket(socket.id, {username, roomId});

        socket.broadcast.to(roomId).emit('incommingMessage', 
            {
                roomId,
                text: `${username} has just joined the room`
            }
        );
    });

    socket.on('message', (message, callback) => {
        const filter = new FilterBadWords();
        let error = null;

        if(filter.isProfane(message.text)){
            message.text = filter.clean(message.text);
            error = "Profanity words is not allow";
        }

        socketio.io.to(message.roomId).emit('incommingMessage', message);
        callback(error);
    });

    socket.on('disconnect', () => {
        const closedSocket = socketio.unTrackingSpecificSocket(socket.id);
        if(!closedSocket) return;

        const {username, roomId} = closedSocket;
        socketio.io.to(roomId).emit('incommingMessage', {
            roomId,
            text: `${username} has just left the room`
        });
    });
}

module.exports = {
    socketio,
    socketHandler
};