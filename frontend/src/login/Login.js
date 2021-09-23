import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from "../store/actions";
import './styles.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(fetchUser(username, password));
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="/chat.svg" id="icon" alt="User Icon" />
                </div>

                <div>
                    <input 
                        type="text" id="login" className="fadeIn second" name="login" placeholder="login" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type="text" id="password" className="fadeIn third" name="login" placeholder="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        id="login_btn" type="submit" className="fadeIn fourth btn_login_submit" value="Log In" 
                        onClick={onClick}
                    />
                </div>

            </div>
        </div>
    );
}

export default Login;