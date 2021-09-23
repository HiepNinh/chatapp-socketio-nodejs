import moment from "moment";
import axios from "axios";

export const chat = (text) => async (dispatch, getState) => {
    const time = moment(new Date().getTime()).format("H:mm");
    const { username, avatar, _id } = getState().user;
    const room = getState().currentRoom;
    const { data } = await axios.post('/api/messages', {
        text,
        time,
        username,
        avatar,
        userId: _id,
        roomId: room._id
    });

  
    dispatch({
      type: "CHAT",
      payload: data,
    });
  };

export const getConversation = () => async (dispatch, getState) => {
    const { _id } = getState().currentRoom;
    const { data } = await axios.get(`/api/messages?roomId=${_id}`);

    dispatch({
      type: "FETCH_MESSAGES",
      payload: data
    });
}