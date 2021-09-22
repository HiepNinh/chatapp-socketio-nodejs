const express = require("express");
const Repository = require('./core/repository/Repository');
const UserDatabase = require('./business/users/data_access/database');
const UserRouter = require('./business/users/routes');
const UserController = require("./business/users/controller");
const CreateUser = require('./business/users/use_cases/create_user');
const LoginUser = require('./business/users/use_cases/login_user');
const RoomDatabase = require('./business/rooms/data_access/database');
const RoomRouter = require('./business/rooms/routes');
const RoomController = require('./business/rooms/controller');
const CreateRoom = require('./business/rooms/use_cases/create_room');
const GetRoom = require('./business/rooms/use_cases/get_room');
const MessageDatabase = require('./business/messages/data_access/database');
const MessageRouter = require('./business/messages/routes');
const MessageController = require('./business/messages/controller');
const CreateMessage = require("./business/messages/use_cases/create_message");
const GetMessageByRoomId = require('./business/messages/use_cases/get_message_by_roomid');

module.exports = class Router {
    constructor() {
        this.initialRepositories();
        this.initialRouters();
    }

    initialRepositories = () => {
        const userDatabase = new UserDatabase();
        const roomDatabase = new RoomDatabase();
        const messageDatabase = new MessageDatabase();

        this.repositories = {};
        this.repositories.users = new Repository(userDatabase);
        this.repositories.rooms = new Repository(roomDatabase);
        this.repositories.messages = new Repository(messageDatabase);
    }

    initialRouters = () => {
        const controllers = this.buildupControllers();

        this.routers = {};
        this.routers.users = new UserRouter(
            controllers.users
        );
        this.routers.rooms = new RoomRouter(
            controllers.rooms
        );
        this.routers.messages = new MessageRouter(
            controllers.messages
        );
    }

    buildupControllers = () => {
        const users = new UserController(
            CreateUser(this.repositories.users),
            LoginUser(this.repositories.users)
        );

        const rooms = new RoomController(
            CreateRoom(this.repositories.rooms),
            GetRoom(this.repositories.rooms)
        );

        const messages = new MessageController(
            CreateMessage(this.repositories.messages),
            GetMessageByRoomId(this.repositories.messages)
        );

        return {
            users,
            rooms,
            messages
        }
    }

    routes = () => {
        const router = express.Router();

        router.use('/users', this.routers.users.routes());
        router.use('/rooms', this.routers.rooms.routes());
        router.use('/messages', this.routers.messages.routes());

        return router;
    }
}