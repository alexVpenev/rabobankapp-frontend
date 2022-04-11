import './EditProfileContainer.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import authHeader from '../authHeader';
import { createBrowserHistory } from "history";
import SubscriptionsRow from "./SubscriptionsRow";
import api from '../api';


const EditProfileContainer = () => {
    const history = createBrowserHistory();

    const [user, setUser] = useState({});

    const [stateButton, setStateButton] = useState({ disabled: true })
    const [state, setState] = useState();

    useEffect(() => {
        const getData = () => {
            axios
                .get(api + "account/user", { headers: authHeader(), })
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data);
                        alert("Something went wrong");
                    } else {
                        setUser(res.data);
                        setFirstName(res.data.firstName);
                        setLastName(res.data.lastName);
                        setEmail(res.data.email);
                    }
                });
        }
        getData();
    }, []);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

  

    const onFileChangeHandler = (e) => {
        e.preventDefault();
        setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', state.selectedFile);
        axios
            .post(api + 'account/upload/photo', {
                body: formData
            }).then(res => {
                if (res.ok) {
                    console.log(res.data);
                    alert("File uploaded successfully.")
                }
            });
    };

    const changeUserDetails = (firstName, lastName, email) => {
        axios
            .post(api + "account/edit-details", { firstName, lastName, email }, { headers: authHeader() })
            .then((res) => {
                if (res.data.error) {
                    console.log(res.data);
                    alert("Something went wrong");
                }
            })
    }


    const handleFirstNameChange = (e) => {
        e.preventDefault();

        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        e.preventDefault();

        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        e.preventDefault();

        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email) {
            alert("Please fill in all the required fields.");
            return;
        } else {
            changeUserDetails(firstName, lastName, email)
        }

        history.push("/");
        window.location.reload();
    };


    return (
        <form method="post" id="login-form" onSubmit={handleFormSubmit}>
            <div className="edit-profile-container">
                <h1 className="edit-profile-header">Account settings</h1>
                <div className="edit-field">
                    <h1 className="edit-field-header">First name</h1>
                    <input className="edit-field-input" type="text" value={firstName} id="first-name" name="first-name" onChange={handleFirstNameChange} /><br />
                </div>
                <div className="edit-field">
                    <h1 className="edit-field-header">Last name</h1>
                    <input type="text" className="edit-field-input" value={lastName} id="last-name" name="last-name" onChange={handleLastNameChange} /><br />
                </div>
                <div className="edit-field">
                    <h1 className="edit-field-header">E-mail address</h1>
                    <input type="text" className="edit-field-input" value={email} id="email" name="email" onChange={handleEmailChange} /><br />
                </div>

                {/* <div className="edit-field">
                <h1 className="edit-field-header">Username</h1>
                <input type="text" className="edit-field-input" placeholder="Username" id="username" name="username"/><br />
            </div> */}
                {/* <div className="edit-field">
                <h1 className="edit-field-header">Password</h1>
                <input type="password" className="edit-field-input" placeholder="password" id="password" name="password"/><br />
            </div> */}

                {/* <div class="textbox">
                    <input type="file" placeholder="Profile picture" id="profile-picture" name="profile-picture" accept=".jpg, .jpeg, .png" onChange={onFileChangeHandler} /><br />

                </div> */}


                <button className="edit-profile-submit">Submit</button>


                {/*tui ne trqbva da e tuka*/}
                {/* <SubscriptionsRow></SubscriptionsRow> */}
            </div>
        </form>
    )

}

export default EditProfileContainer