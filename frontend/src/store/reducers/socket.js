export const SocketReducer = (state = {}, action) => {
    switch (action.type) {
      //returns updated state
      case "INIT_SOCKET":
        return action.payload;
      //else the current state is retained
      default:
        return state;
    }
  };