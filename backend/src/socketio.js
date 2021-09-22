const FilterBadWords = require('bad-words');
const { generateMessage } = require('./utils/message');
const { app } = require("./app");
const SocketIO = require('./core/SocketIO');

const socketio = new SocketIO(app);

const socketHandler = (socket) => {
    socket.broadcast.emit('incommingMessage', generateMessage("A new user has joint"));

    socket.on('messageSend', (message, callback) => {
        const filter = new FilterBadWords();
        let error = "";

        if(filter.isProfane(message)){
            message = filter.clean(message);
            error = "Profanity words is not allow";
        }

        socketio.io.emit('incommingMessage', generateMessage(
            message, 
            "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
        ));
        callback(error);
    });

    socket.on('disconnect', () => {
        socketio.io.emit("incommingMessage", generateMessage("A user has left"));
    });
}

module.exports = {
    socketio,
    socketHandler
};