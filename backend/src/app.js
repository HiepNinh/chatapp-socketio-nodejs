const bodyParser = require('body-parser');
const path = require('path');
const errorHandling = require('./core/middlewares/handling_error');
const Application = require("./core/startup");
const Router = require('./routes');

const app = new Application();
const router = new Router();
const publicPath = path.join(__dirname, '../public');

app.registerHealthCheck();

app.registerMiddlewares(
    [
        bodyParser.urlencoded({ extended: true }),
        bodyParser.json(),
        Application.static(publicPath)
    ]
);

app.registerRoutes("/", router.routes());

app.registerMiddlewares(
    [
        errorHandling
    ]
);

module.exports = {
    app
};