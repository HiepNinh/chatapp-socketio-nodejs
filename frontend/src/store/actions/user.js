import axios from "axios";
import history from "../../history"; 

export const fetchUser = (username, password) => async (dispatch) => {
    const {data} = await axios.post('/api/users/login', {
      username,
      password
    });
  
    dispatch({
      type: "FETCH_USER",
      payload: data
    });
  
    history.push('/chatroom');
  }