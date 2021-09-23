const Message = require('../model');

module.exports = repository => {
    const execute = ({text, time, username, avatar, userId, roomId}) => {
        const newMessage = new Message(text, time, username, avatar, userId, roomId);
        return repository.create(newMessage);
    }

    return { execute };
}