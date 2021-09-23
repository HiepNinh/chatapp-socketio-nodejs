import axios from "axios";

export const fetchRooms = () => async (dispatch) => {
    const {data} = await axios.get(`/api/rooms`);
  
    dispatch({
      type: "FETCH_ROOMS",
      payload: data
    });
}

export const updateCurrentRoom = (room) => (dispatch, getState) => {
    const { socket, user } = getState();
    socket.emit('join', { username: user.username, roomId: room._id});

    dispatch({
        type: "UPDATE_CURRENT_ROOM",
        payload: room
    });
} 