import React, { useState, useEffect } from "react";
import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import coffee from "../nav/coffee.png";
import { checkUserAsync } from "../../reducers/users/thunk";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [invalidUser, setInvalidUSer] = useState(false);

    const dispatch = useDispatch();

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13 || e.key === "Enter") {
            document.getElementById("loginBtn").click();
            e.preventDefault();
        }
    };

    async function handleSubmit(e) {
        const test = await dispatch(checkUserAsync([username, password]));
        if (test.payload.message === "User not found") {
            setInvalidUSer(true);
            e.preventDefault();
        } else {
            setInvalidUSer(false);
            localStorage.setItem("username", username);
            console.log('DB document returned: ', test.payload);
            localStorage.setItem("friendsCount", test.payload.friends.length)
            window.location.href="/Feed";
        }
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
                            {invalidUser && <div className="row-login"><span id="invalidUser">Invalid username and/or password!</span></div>}
                            <div className="row-login">
                                <button className="loginBtn" id="loginBtn" type="button" onClick={handleSubmit}>Login</button>
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

