module.exports = respository => {
    const execute = async ({username, password}) => {
        return await respository.getOne({
            username,
            password
        });
    }

    return { execute };
}