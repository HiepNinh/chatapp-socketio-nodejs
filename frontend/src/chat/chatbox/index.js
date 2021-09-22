import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {}

const ChatBox = ({socket}) => {
    const user = useSelector(state => state.user);
    const currentRoom = useSelector(state => state.currentRoom);
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch()
    }, [socket]);

    return (
        <div className="col-md-8 col-xl-6 chat">
            <div className="card">
                <div className="card-header msg_head">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <img src={currentRoom.cover} className="rounded-circle user_img" />
                            <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                            <span>{currentRoom.name}</span>
                            <p>{messages.length} Messages</p>
                        </div>
                        <div className="video_cam">
                            <span><i className="fas fa-video"></i></span>
                            <span><i className="fas fa-phone"></i></span>
                        </div>
                    </div>
                </div>

                <div className="card-body msg_card_body">
                    {
                        messages && messages.length > 0 ?
                        messages.map(message => {
                            if(!message.username){
                                return (
                                    <div class="chat-box-single-line">
                                        {message.text}
                                    </div>
                                );
                            }
                            else if(message.username === user.username) {
                                return (
                                    <div className="d-flex justify-content-start mb-4">
                                        <div className="img_cont_msg">
                                            <img src="{message.useravatar}" class="rounded-circle user_img_msg" />
                                        </div>
                                        <div className="msg_cotainer">
                                            <span className="msg_user">{message.username}</span>
                                            {message.text}
                                            <span className="msg_time">{message.time}</span>
                                        </div>
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div className="d-flex justify-content-end mb-4">
                                        <div className="msg_cotainer_send">
                                            <span className="msg_user_send">{message.username}</span>
                                            {message.text}
                                            <span className="msg_time_send">{message.time}</span>
                                        </div>
                                        <div className="img_cont_msg">
                                            <img src="{message.useravatar}" className="rounded-circle user_img_msg" />
                                        </div>
                                    </div>
                                );
                            }
                        })
                        : null
                    }
                </div>

                <div className="card-footer">
                    <div className="input-group">
                        <div className="input-group-append">
                            <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                        </div>
                        <textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
                        <div className="input-group-append">
                            <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;