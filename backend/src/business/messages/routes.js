const express = require("express");

module.exports = class MessageRouter {
    constructor(
        controller
    ){
        this.controller = controller;
    }

    routes = () => {
        const router = express.Router();

        router.route('/')
            .get(this.controller.getMessageByRoomId)
            .post(this.controller.createMessage);

        return router;
    }
}