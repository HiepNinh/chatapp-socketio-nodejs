module.exports = repository => {
    const execute = async () => {
        return await repository.getMany();
    }

    return { execute };
}