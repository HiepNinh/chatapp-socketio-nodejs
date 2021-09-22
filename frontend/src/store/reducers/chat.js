export const ChatReducer = (state = {}, action) => {
    switch (action.type) {
      //returns updated state
      case "CHAT":
        return { ...state, [action.payload.room]: action.payload };
      //else the current state is retained
      default:
        return state;
    }
  };