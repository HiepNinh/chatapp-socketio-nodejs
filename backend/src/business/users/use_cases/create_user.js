const User = require('../model');

module.exports = repository => {
    const execute = ({username, password, avatar}) => {
        const newUser = new User(username, password, avatar);

        return repository.create(newUser);
    }

    return { execute };
}