const generateMessage = (text, avatar = null, createdAt = new Date().getTime()) => {
    return {
        text,
        avatar,
        createdAt
    };
};

module.exports = {
    generateMessage
}