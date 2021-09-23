const BaseSchema = require('../../../core/schema/BaseSchema');
const { ObjectId } = require("mongoose").Types;

module.exports = class MessageSchema extends BaseSchema {
    constructor() {
        const configuration = {
            text: {
                type: String,
                required: true
            },
            time: {
                type: String
            },
            username: {
                type: String
            },
            avatar: {
                type: String
            },
            userId: {
                type: ObjectId,
                ref: 'users'
            },
            roomId: {
                type: ObjectId,
                ref: 'rooms'
            }
        };

        super(configuration);
    }
}