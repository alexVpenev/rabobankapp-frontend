import './Login.css';
import './Register.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { createBrowserHistory } from "history";
import api from '../api';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginErrorMessage, setLoginErrorMessage] = useState("");

    const [stateButton, setStateButton] = useState({ disabled: true })

    const history = createBrowserHistory();

    const login = (username, password) => {
        axios
            .post(api + "login", { username, password })
            .then((res) => {
                if (res.data.error) {
                    console.log(res.data);
                } else {
                    console.log(res.data);

                    localStorage.setItem('accessToken', JSON.stringify(res.data));

                    history.push("/")
                    window.location.reload();
                }
            })
            .catch((error) => {
                if(error){
                    setLoginErrorMessage("Invalid credentials"); 
                    return;
                }
            });

    };

    const checkFields = () => {
        if (password.length >= 6) {
            setStateButton({
                disabled: false
            })
            return;
        }
        else {
            setStateButton({
                disabled: true
            })
        }

        if (password.length < 6 || !username) {

            setStateButton({
                disabled: true
            })

            return;
        }
    }

    const handleUsernameChange = (e) => {
        e.preventDefault();

        checkFields();
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        e.preventDefault();

        checkFields();  
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setLoginErrorMessage("Please fill in all the required fields.");
            return;
        } else {
            login(username, password);
        }
    };

    return (
        <form method="post" id="login-form" onSubmit={handleFormSubmit}>
            <div class="login-container">
                <p className='error-message'>{loginErrorMessage}</p>
                <h1>Login</h1>
                <div class="textbox">
                    <input type="text" placeholder="Username" id="username" name="username" onChange={handleUsernameChange} /><br />
                </div>
                <div class="textbox">
                    <input type="password" placeholder="Password" id="password" name="password" onChange={handlePasswordChange} /><br />
                </div>
                <input disabled={stateButton.disabled} className="btn" type="submit" value="Confirm" id="btnSubmit" />
                <div class="btn-reg">
                    <p>
                        Don't have an account? <Link to="/register">Click here to register.</Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default Login;