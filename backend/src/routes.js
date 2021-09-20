const express = require("express");

module.exports = class Router {
    constructor() {
    }

    routes = () => {
        const router = express.Router();

        router.route('/')
            .get((req, res, next) => {
                res.send('index.html');
            })

        return router;
    }
}