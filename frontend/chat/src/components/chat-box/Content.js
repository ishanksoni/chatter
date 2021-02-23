import React from 'react'
import './Content.css'

function Content({
    messages
}) 
    {
    var messagesList = messages.map(Func)
    
    function Func(value,index){
        if(index!=0){
            if(index%2==1){
                return <li key = {index} className="Card1"> <b className="user-name">{value.sender}:</b> {value.msg}</li>
            }
            if(index%2==0){ 
                return <li key = {index} className ="Card2"> <b className="user-name">{value.sender}:</b> {value.msg}</li>
            }
        }
    }
    return (
        <div className = "Content">
            <ul>{messagesList}</ul>
        </div>
    )
}

export default Content;
