import React, { useState } from "react";
import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import coffee from "../nav/coffee.png";
import PropTypes from 'prop-types';
import { loginUserAsync } from "../../reducers/services/thunk";
import { useDispatch } from "react-redux";

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    return (
            <div className="app">
                <div className="login-form">
                    <div className='row-login'>
                        <img className="login-image" src={coffee} />
                    </div>
                    <form>
                        <div className="test">
                            <div className="row-login">
                                <label><b>Username</b></label><br/>
                                <input type="text" placeholder="Enter Username" name="uname" required onChange={e => setUserName(e.target.value)}/>
                                <br/>
                            </div>
                            <div className="row-login">
                                <label><b>Password</b></label><br/>
                                <input type="password" placeholder="Enter Password" name="psw" required onChange={e => setPassword(e.target.value)}/>
                                <br/>
                            </div>
                            <br/>
                            <div className="row-login">
                                <button className="loginBtn" type="submit" onClick={() => dispatch(loginUserAsync([username, password]))}><a href="/Feed">Login</a></button>
                            </div>
                            <div className="row-login">
                                <span className="psw">Forgot <a href="#">password?</a></span>
                            </div>
                        </div>
                    </form>
                </div>
        </div>);
}
