import moment from "moment";
import axios from "axios";

export const chat = (text) => async (dispatch, getState) => {
  const time = moment(new Date().getTime()).format("H:mm");
  const {socket, user, currentRoom} = getState();

  const { data } = await axios.post('/api/messages', {
      text,
      time,
      username: user.username,
      avatar: user.avatar,
      userId: user._id,
      roomId: currentRoom._id
  });

  socket.emit('message', data, (err) => {
    console.log(err);
  });
};

export const serverNotify = (message) => {
  return {
    type: "CHAT",
    payload: {
      roomId: message.roomId,
      message: {  _id: new Date().getTime(), ...message }
    }
  };
}

export const getConversation = () => async (dispatch, getState) => {
    const { _id } = getState().currentRoom;
    const { data } = await axios.get(`/api/messages?roomId=${_id}`);

    dispatch({
      type: "FETCH_MESSAGES",
      payload: {
        roomId: _id,
        messages: data
      }
    });
}