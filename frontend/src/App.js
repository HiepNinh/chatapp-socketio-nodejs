import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
import { Router, Switch, Route } from "react-router-dom";
import Chat from "./chat/Chat";
import Login from './login/Login';
import history from './history';
import { setSocket } from "./store/actions";
import './styles.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:8000`);
    dispatch(setSocket(newSocket));
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/chatroom" exact>
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
