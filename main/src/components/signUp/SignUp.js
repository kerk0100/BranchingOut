import React, { useState, useEffect } from "react";
import './signUp.css';
import coffee from "../nav/coffee.png";
import { loginUserAsync } from "../../reducers/users/thunk";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13 || e.key === "Enter") {
            document.getElementById("createBtn").click();
            e.preventDefault();
            window.location.href="/Feed";
        }
    };

    const handleSubmit = e => {
        dispatch(loginUserAsync([username, password]));
        localStorage.setItem("user", username);
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className='row-login'>
                    <img className="login-image" src={coffee} />
                </div>
                <h2>Welcome to Coffee Brewsters</h2>
                <form>
                    <div className="test">
                        <div className="row-login">
                            <label><b>Username</b></label><br/>
                            <input type="text" placeholder="Enter Username" id="uname" required onChange={e => setUserName(e.target.value)}/>
                            <br/>
                        </div>
                        <div className="row-login">
                            <label><b>Password</b></label><br/>
                            <input type="password" placeholder="Enter Password" id="psw" required onChange={e => setPassword(e.target.value)} onKeyPress={handleKeypress}/>
                        </div>
                        <br/>
                        <div className="row-login">
                            <button id="createBtn" type="submit" onClick={handleSubmit}><a className="createA" href="/Feed">Create account!</a></button>
                        </div>
                        <div className="row-login">
                            <span className="psw">Already have an account? <a className="createA" href="/">Sign In</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>);
}