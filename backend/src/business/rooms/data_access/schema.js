const BaseSchema = require("../../../core/schema/BaseSchema");

module.exports = class RoomSchema extends BaseSchema {
    constructor() {
        const configuration = {
            name: {
                type: String,
                required: true
            },
            cover: {
                type: String,
                required: true
            }
        }

        super(configuration);

        this.virtual('messages', {
            ref: 'messages',
            localField: '_id',
            foreignField: 'roomId'
        });
    }
}