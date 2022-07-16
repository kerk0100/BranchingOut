import React, { useState, useEffect } from "react";
import './signUp.css';
import coffee from "../nav/coffee.png";
import { checkUserNameFreeAsync, loginUserAsync } from "../../reducers/users/thunk";
import { useDispatch } from "react-redux";

export default function SignUp() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [invalidUser, setInvalidUSer] = useState(false);
    const [noEntry, setNoEntry] = useState(false);

    const dispatch = useDispatch();

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13 || e.key === "Enter") {
            document.getElementById("createBtn").click();
        }
    };

    async function checkUserNotTaken(e) {
        const user = await dispatch(checkUserNameFreeAsync(username));
        if (user.payload.message !== "User not taken") {
            setInvalidUSer(true);
            console.log('DB document returned: ', user.payload);
            e.preventDefault();
        } else if (username === "" || password === "") {
           setNoEntry(true);
        } else {
            setInvalidUSer(false);
            setNoEntry(false);
            localStorage.setItem("username", username);
            localStorage.setItem("friendsCount", "0");
            handleSubmit();
            window.location.href="/Feed";
        }
    }

    const handleSubmit = () => {
        dispatch(loginUserAsync([username, password]));
        localStorage.setItem("username", username);
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
                            <br/>
                        </div>
                        {invalidUser && <div className="row-login"><span id="invalidUser">Username already exists!</span></div>}
                        {noEntry && <div className="row-login"><span id="invalidUser">Please enter a username and password!</span></div>}
                        <div className="row-login">
                            <button id="createBtn" type="button" onClick={checkUserNotTaken}>Create account!</button>
                        </div>
                        <div className="row-login">
                            <span className="psw">Already have an account? <a className="createA" href="/">Sign In</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>);
}