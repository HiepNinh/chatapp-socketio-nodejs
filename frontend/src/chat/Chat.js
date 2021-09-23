import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import _ from "lodash";
import history from "../history";
import Room from './rooms';
import ChatBox from './chatbox';
import './styles.css';

const Chat = () => {
    const user = useSelector(state => state.user);
     
    useEffect(() => {
        if(_.isEmpty(user))
            history.push('/');
    }, [user]);

    return (
        <div className="container-fluid h-100">
			<div className="row justify-content-center h-100">
				<Room />
                <ChatBox />
			</div>
		</div>
    );
}

export default Chat;