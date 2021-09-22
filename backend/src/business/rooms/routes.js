const express = require("express");

module.exports = class RoomRouter {
    constructor(
        controller
    ){
        this.controller = controller;
    }

    routes = () => {
        const router = express.Router();

        router.route('/')
            .get(this.controller.getRoom)
            .post(this.controller.createRoom);

        return router;
    }
}