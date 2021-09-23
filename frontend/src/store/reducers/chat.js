import _ from "lodash";

export const ChatReducer = (state = {}, action) => {
    switch (action.type) {
      //returns updated state
      case "FETCH_MESSAGES":
        return { ...state, ..._.mapKeys(action.payload, "_id") }
      case "CHAT":
        return { ...state, [action.payload._id]: action.payload };
      //else the current state is retained
      default:
        return state;
    }
  };