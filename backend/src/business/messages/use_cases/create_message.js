const Message = require('../model');

module.exports = repository => {
    const execute = ({text, time, userId, roomId}) => {
        const newMessage = new Message(text, time, userId, roomId);
        return repository.create(newMessage);
    }

    return { execute };
}