module.exports = repository => {
    const execute = (roomId) => {
        const start = new Date();
        start.setDate(start.getDate() -1);
        const end = new Date();

        return repository.getMany({ 
            roomId,
            createdAt: {
                $gte: start, 
                $lte: end
            }
        });
    }

    return { execute };
}