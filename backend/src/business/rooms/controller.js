module.exports = class RoomController {
    constructor(
        createRoomCase,
        getRoomCase
    ){
        this.createRoomCase = createRoomCase;
        this.getRoomCase = getRoomCase
    }

    createRoom = async (req, res, next) => {
        try{
            const result = await this.createRoomCase.execute(req.body);
            res.status(201).json(result);
        }catch(err) {
            err.code = 400;
            next(err);
        }
    }

    getRoom = async (req, res, next) => {
        try{
            const result = await this.getRoomCase.execute();
            res.status(200).json(result);
        }catch(err){
            err.code = 400;
            next(err);
        }
    }
}