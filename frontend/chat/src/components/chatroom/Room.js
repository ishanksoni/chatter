import React from 'react'
import Content from '../chat-box/Content';
import './room.css'

function Room({
    room_name,
    message,
    messages,
    handleChatOnClick,
}){
    const sendM = (event) => {
        if(event.keyCode === 13){
            handleChatOnClick(message)
        }
    }
    return (
        <div className= "chat-box">
            <b className="room-name">Room Name:{room_name}</b>
            <br/>
            <Content messages = {messages}/>
            <input id ="input-message" className = "input-box" placeholder="Text It"
            onKeyDown={(e) => sendM(e) }
            onChange={e =>{
                message = e.target.value;
                }
            }
            />
            <input id ="submit" type = "button" className="send-button" value ="Send▶" 
            onClick ={() => handleChatOnClick(message)}/>
        </div>
    )
}

export default Room
