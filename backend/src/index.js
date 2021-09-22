const { socketio, socketHandler } = require('./socketio');

socketio.onConnection(socketHandler);

const port = process.env.PORT || 80;
socketio.server.listen(port, () => {
    console.log(`Listening on ${port}`);
});