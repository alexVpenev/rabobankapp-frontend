import './Register.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
// import { Server } from 'http';
import { createBrowserHistory } from "history";
import axios from 'axios';


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const [stateButton, setStateButton] = useState({ disabled: true })

    const history = createBrowserHistory();

    const register = (username, password, email, firstName, lastName) => {
        axios
            .post("http://localhost:8080/account/register", {
                username,
                email,
                password,
                firstName,
                lastName
            })
            .then((res) => {
                if (res.data.error) {
                    alert(res.data);
                    history.push("/");
                    window.location.reload();
                }
            })
            .catch((error) => {
                if (error.response.status === 409) {
                    console.log(error.res);
                    alert(error.res.data);
                } else {
                    alert("Something went wrong");
                }
            });
    };

    const checkFields = () => {
        if (password === confirmPassword && password.length >= 6) {
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

        if (password.length < 6 || !email || !username || !firstName || !lastName) {

            setStateButton({
                disabled: true
            })

            return;
        }
        if (password.length - 1 === confirmPassword.length) {

            setStateButton({
                disabled: false
            })
            return;
        }
    }


    const handleFirstNameChange = (e) => {
        e.preventDefault();

        setFirstName(e.target.value);
        checkFields();
        //  console.log(" handleChange" + firstName.length)

    };

    const handleLastNameChange = (e) => {
        e.preventDefault();

        setLastName(e.target.value);
        checkFields();

    };

    const handleUsernameChange = (e) => {
        e.preventDefault();

        setUsername(e.target.value);
        checkFields();
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();

        setPassword(e.target.value);
        checkFields();

    };

    const handleConfirmPasswordChange = (e) => {
        e.preventDefault();

        setConfirmPassword(e.target.value);
        checkFields();

    };

    const handleEmailChange = (e) => {
        e.preventDefault();

        setEmail(e.target.value);
        checkFields();
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password || !email || !username || !firstName || !lastName) {
            setErrorMessage("Please fill in all the required fields.");
            return;
        }
        if (password === confirmPassword) {
            if (password.length < 6) {
                setErrorMessage("Password must be at least 6 characters long");
                return;
            }
            setErrorMessage("");
            register(username, password, email, firstName, lastName);
        } else {
            setErrorMessage("Passwords do not match.");
        }

        history.push("/");
        window.location.reload();
    };
    return (
        <form method="post" id="register-form" onSubmit={handleSubmit}>
            <div class="register-container">
                <p>{errorMessage}</p>
                <h1>Register</h1>
                <div class="reg-container-1">
                    {/* <div class="prefix">
                    <p>Prefix:</p>
                    <div class="prefix-select">
                        <div class="prefix-option">
                            <input type="radio" id="prefix-mr" name="prefix-mr" value="Mr." />
                            <label for="Mr."> Mr.</label>
                        </div>
                        <div class="prefix-option">
                            <input type="radio" id="prefix-mr" name="prefix-mr" value="Ms." />
                            <label for="Mr."> Ms.</label>
                        </div>
                    </div>
                </div> */}
                    <div class="textbox">
                        <input type="text" placeholder="First Name" id="first-name" name="first-name" onChange={handleFirstNameChange} /><br />
                    </div>

                    

                    {/* <div class="textbox">
                        <input type="text" placeholder="Middle Name" id="middle-name" name="middle-name" /><br />
                    </div> */}
                    <div class="textbox">
                        <input type="text" placeholder="Last Name" id="last-name" name="last-name" onChange={handleLastNameChange} /><br />
                    </div>
                    {/* <div class="textbox">
                        <input type="text" placeholder="Date of Birth" id="date-of-birth" name="date-of-birth" /><br />
                    </div> */}
                </div>
                <div class="reg-container-2">
                    <div class="textbox">
                        <input type="text" placeholder="E-mail address" id="email" name="email" onChange={handleEmailChange} /><br />
                    </div>
                    <div class="textbox">
                        <input type="text" placeholder="Username" id="username" name="username" onChange={handleUsernameChange} /><br />
                    </div>
                    <div class="textbox">
                        <input type="password" placeholder="Password" id="password" name="password" onChange={handlePasswordChange} /><br />
                    </div>
                    <div class="textbox">
                        <input type="password" placeholder="Confirm Password" id="confirm-password" name="confirm-password" onChange={handleConfirmPasswordChange} /><br />
                    </div>
                </div>
                <input disabled={stateButton.disabled} className="btn" type="submit" value="Confirm" id="btnSubmit" />
                <div class="btn-reg">
                    <p>
                        Already have an account? <Link to="/">Click here to log in.<br /><br /></Link>
                    </p>
                </div>
            </div>
        </form >
    );
}

export default Register;