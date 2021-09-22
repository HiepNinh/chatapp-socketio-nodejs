module.exports = class Message {
    constructor(text, time, userId, roomId){
        this.text = text;
        this.time = time;
        this.userId = userId;
        this.roomId = roomId;
    }
}