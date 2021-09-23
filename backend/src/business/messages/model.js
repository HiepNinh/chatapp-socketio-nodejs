module.exports = class Message {
    constructor(text, time, username, avatar, userId, roomId){
        this.text = text;
        this.time = time;
        this.username = username;
        this.avatar = avatar;
        this.userId = userId;
        this.roomId = roomId;
    }
}