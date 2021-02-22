import React from 'react'
import './form.css'


function Form({
    rname,
    uname,
    handleLoginOnClick,
}) {
    return (
        <div className="box">
                <br></br>
                <input type="text" name="name" className="inp-box" placeholder ="user-name"
                    onChange={e => {
                        uname = (e.target.value);
                        // console.log(uname);
                    }
                }/>
                <br></br>
                <br></br>
                <input type="text" name="room-name" className= "inp-box" placeholder ="room-name"
                    onChange = { e => {
                        rname = e.target.value;
                    }
                } />
                <br/>
                <br></br>
            <input id="login-button"type ="submit" className="button" value="getMeIN"
                onClick ={() => handleLoginOnClick(rname,uname)}/>
        </div>
    )
}

export default Form
