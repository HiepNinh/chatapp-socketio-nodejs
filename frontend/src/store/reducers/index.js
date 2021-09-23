// import the reducers
import { combineReducers } from "redux";
import { SocketReducer } from "./socket";
import { ChatReducer } from "./chat";
import { UserReducer } from "./user";
import { RoomReducer, CurrentRoomReducer } from "./room";
// define the object and call the action
const rootReducers = combineReducers({
    socket: SocketReducer,
    messages: ChatReducer,
    user: UserReducer,
    rooms: RoomReducer,
    currentRoom: CurrentRoomReducer
});
// else return default root reducer
export default rootReducers;
