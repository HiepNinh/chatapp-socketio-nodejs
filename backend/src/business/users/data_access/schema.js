const BaseSchema = require("../../../core/schema/BaseSchema");

module.exports = class UserSchema extends BaseSchema {
    constructor(){
        const configuration = {
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            avatar: {
                type: String
            }
        };

        super(configuration);

        this.virtual('messages', {
            ref: 'messages',
            localField: '_id',
            foreignField: 'userId'
        });
    }
}