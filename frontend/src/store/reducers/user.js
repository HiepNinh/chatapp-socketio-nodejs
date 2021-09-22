export const UserReducer = (state = {}, action) => {
    switch (action.type) {
      //returns updated state
      case "FETCH_USER":
        return action.payload;
      //else the current state is retained
      default:
        return state;
    }
  };