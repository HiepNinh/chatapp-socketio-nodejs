const Room = require('../model');

module.exports = repository => {
    const execute = ({name, cover}) => {
        const newRoom = new Room(name, cover);

        return repository.create(newRoom);
    }

    return { execute }; 
}