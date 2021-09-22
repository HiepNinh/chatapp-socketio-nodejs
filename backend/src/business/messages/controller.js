module.exports = class MessageController {
    constructor(
        createMessageCase,
        getMessageByRoomIdCase
    ){
        this.createMessageCase = createMessageCase;
        this.getMessageByRoomIdCase = getMessageByRoomIdCase;
    }

    createMessage = async (req, res, next) => {
        try{
            const result = await this.createMessageCase.execute(req.body);
            res.status(201).json(result);
        }catch(err) {
            err.code = 400;
            next(err);
        }
    }

    getMessageByRoomId = async (req, res, next) => {
        try{
            const result = await this.getMessageByRoomIdCase.execute(req.query.roomId);
            res.status(200).json(result);
        }catch(err){
            next(err);
        }
    }
}