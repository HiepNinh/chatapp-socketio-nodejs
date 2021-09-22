const bodyParser = require('body-parser');
const path = require('path');
const errorHandling = require('./core/middlewares/handling_error');
const cors = require("cors");
const Application = require("./core/Application");
const Router = require('./routes');

const app = new Application();
const router = new Router();
const publicPath = path.join(__dirname, '../public');

const {MONGO_PREFIX, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_DATABASE} = process.env;
app.registerDatabase(`${MONGO_PREFIX}://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?authSource=admin`);

app.registerHealthCheck();

app.registerMiddlewares(
    [
        bodyParser.urlencoded({ extended: true }),
        bodyParser.json(),
        Application.static(publicPath),
        cors()
    ]
);

app.registerRoutes("/", router.routes());

app.registerMiddlewares(
    [
        errorHandling
    ]
);

module.exports = {
    app,
    router
};