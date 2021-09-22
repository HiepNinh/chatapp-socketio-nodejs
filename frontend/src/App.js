import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Router, Switch, Route } from "react-router-dom";
import Chat from "./chat/Chat";
import Login from './login/Login';
import history from './history';
import './styles.css';

const App = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:8000`);
    setSocket(newSocket);
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
            <Chat socket={socket} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
