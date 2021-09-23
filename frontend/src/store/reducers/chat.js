import _ from "lodash";

export const ChatReducer = (state = {}, action) => {
    switch (action.type) {
      //returns updated state
      case "FETCH_MESSAGES":
        return { ...state, [action.payload.roomId]: action.payload.messages };
      case "CHAT":
        return { ...state, [action.payload.roomId]: [...state[action.payload.roomId], action.payload.message] };
      //else the current state is retained
      default:
        return state;
    }
  };