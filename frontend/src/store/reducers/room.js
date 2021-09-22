import _ from 'lodash';

export const RoomReducer = (state = {}, action) => {
  switch (action.type) {
    //returns updated state
    case "FETCH_ROOMS":
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    //else the current state is retained
    default:
      return state;
  }
};

export const CurrentRoomReducer = (state = {}, action) => {
  switch (action.type) {
    //returns updated state
    case "UPDATE_CURRENT_ROOM":
      return action.payload;
    //else the current state is retained
    default:
      return state;
  }
}