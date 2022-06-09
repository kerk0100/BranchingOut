import React from "react";
import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import coffee from "../nav/coffee.png";
import Navbar from "../nav/Navbar";

export default function Login() {

    // not working :(
    function redirectToMain() {
        return (
            {Navbar}
        );
    }
    return (
            <div className="app">
                <div className="login-form">
                    <div className='row-login'>
                        <img className="login-image" src={coffee} />
                    </div>
                    <form action="action_page.php" method="post">
                        <div className="test">
                            <div className="row-login">
                                <label><b>Username</b></label><br/>
                                <input type="text" placeholder="Enter Username" name="uname" required/>
                                <br/>
                            </div>
                            <div className="row-login">
                                <label><b>Password</b></label><br/>
                                <input type="password" placeholder="Enter Password" name="psw" required/>
                                <br/>
                            </div>
                            <br/>
                            <div className="row-login">
                                <button className="loginBtn" type="submit" onClick={() => redirectToMain()}><a href="/Navbar">Login</a></button>
                                <button className="loginBtn" type="button">Cancel</button><br/>
                            </div>
                            <div className="row-login">
                                <span className="psw">Forgot <a href="#">password?</a></span>
                            </div>
                        </div>
                    </form>
                </div>
        </div>);
}