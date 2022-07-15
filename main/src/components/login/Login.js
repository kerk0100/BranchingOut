import React, { useState, useEffect } from "react";
import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import coffee from "../nav/coffee.png";
import { loginUserAsync } from "../../reducers/users/thunk";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [currentUser, setUser] = useState();

    const dispatch = useDispatch();

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13 || e.key === "Enter") {
            document.getElementById("loginBtn").click();
            e.preventDefault();
            window.location.href="/Feed";
        }
    };

    const handleSubmit = e => {
        setUser({username});
        localStorage.setItem("user", username);
        console.log('currentUser ' + currentUser);
        dispatch(loginUserAsync([username, password]));
    }

    return (
            <div className="appLogin">
                <div className="login-form">
                    <div className='row-login'>
                        <img className="login-image" src={coffee} />
                    </div>
                    <form>
                        <div>
                            <div className="row-login">
                                <label><b>Username</b></label><br/>
                                <input type="text" placeholder="Enter Username" id="uname" required onChange={e => setUserName(e.target.value)}/>
                                <br/>
                            </div>
                            <div className="row-login">
                                <label><b>Password</b></label><br/>
                                <input type="password" placeholder="Enter Password" id="psw" required onChange={e => setPassword(e.target.value)} onKeyPress={handleKeypress}/>
                                <br/>
                            </div>
                            <br/>
                            <div className="row-login">
                                <button className="loginBtn" id="loginBtn" type="submit" onClick={handleSubmit}><a className="createA" href="/Feed">Login</a></button>
                            </div>
                            <div className="row-login">
                                <span className="psw">Don't have an account? <a className="createA" href="/SignUp">Sign Up</a></span>
                            </div>
                            <div className="row-login">
                                <span className="psw">Forgot <a className="createA" href="#">password?</a></span>
                            </div>
                        </div>
                    </form>
                </div>
        </div>);
}
