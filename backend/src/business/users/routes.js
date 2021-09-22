const express = require("express");

module.exports = class UserRouter {
    constructor(
        controller
    ){
        this.controller = controller;
    }

    routes = () => {
        const router = express.Router();

        router.route('/')
            .post(this.controller.createUser);

        router.route('/login')
            .post(this.controller.login);

        return router;
    }
}