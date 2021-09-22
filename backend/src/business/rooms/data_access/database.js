const mongoose = require("mongoose");
const RoomSchema = require("./schema");

module.exports = class RoomDatabase {
    constructor(){
        return mongoose.model("rooms", new RoomSchema());
    }
}