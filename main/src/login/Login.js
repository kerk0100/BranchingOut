import '../Style.css';

export default function Login() {
    return (
        <div>
            <form action="action_page.php" method="post">

            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <br/>
                <br/>
                <button type="submit">Login</button> <button type="button" className="cancelbtn">Cancel</button>

                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
            </form>
        </div>);
}