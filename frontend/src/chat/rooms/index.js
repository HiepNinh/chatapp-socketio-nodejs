import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms, updateCurrentRoom } from "../../store/actions";

const Room = () => {
    const disatch = useDispatch();
    const roomRefs = useRef({});
    const rooms = useSelector(state => state.rooms);

    useEffect(() => {
        disatch(fetchRooms());
    }, [disatch]);

    const onClick = (index, room) => {
        if(roomRefs.current[index].classList.contains("active")) return;

        Object.values(roomRefs.current).map(el => el.classList.remove("active"));
        roomRefs.current[index].classList.add("active");

        disatch(updateCurrentRoom(room));
    }

    return (
        <div className="col-md-4 col-xl-3 chat">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header">
                    <div className="input-group">
                        <input type="text" placeholder="Search..." name="" className="form-control search" />
                        <div className="input-group-prepend">
                            <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>

                <div className="card-body contacts_body">
                    <ul className="contacts">
                        {
                            rooms && Object.values(rooms).length > 0 ? 
                            Object.values(rooms).map((room, index) => (
                                <li 
                                    key={room._id} 
                                    ref={roomRef => roomRefs.current[index] = roomRef} 
                                    onClick={e => onClick(index, room)}
                                >
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img alt="group_img" src={room.cover} className="rounded-circle user_img" />
                                        </div>
                                        <div className="user_info">
                                            <span>{room.name}</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                            : null
                        }
                    </ul>
                </div>

                <div className="card-footer"></div>
            </div>
        </div>
    );
}

export default Room;