import moment from "moment";

export const chat = (text, userId, roomId) => {
    const now = new Date().getTime();
  
    return {
      type: "FETCH_MESSAGES",
      payload: {
        text,
        time: moment(now).format("H:mm")
      },
    };
  };