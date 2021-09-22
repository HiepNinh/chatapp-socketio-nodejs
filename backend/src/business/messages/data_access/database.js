const mongoose = require("mongoose");
const MessageSchema = require("./schema");

module.exports = class MessageDatabase {
    constructor(){
        return mongoose.model("messages", new MessageSchema());
    }
}