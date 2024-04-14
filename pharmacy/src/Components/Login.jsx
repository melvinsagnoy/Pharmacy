import React from 'react';
import './Login.css';
import { FaUser} from "react-icons/fa"
import { FaKey} from "react-icons/fa"



function Login(){
    return(
        <div class="container">
            <div className="wrapper" id="login">
                <form action="">
                    <h1>LOGIN</h1>
                    <div className="input-box">
                    <FaUser/> <input id="username" type="text" placeholder="Username"></input>
                    </div>
                    <div className="input-box">
                    <FaKey/> <input id="password" type="password" placeholder="Password"></input>
                    </div>
                    <div id="checkbox" className="remember-forgot">
                        <label><input type="checkbox"/> Remember Me</label><br></br>
                        <a href ="#">Forgot Password?</a><br></br>
                    </div>
                    
                    <button id="login-button" type="submit"> LOGIN</button>
                 
                </form>
            </div>
        </div>
    );
}

export default Login