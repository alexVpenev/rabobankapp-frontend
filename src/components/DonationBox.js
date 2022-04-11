import { useState } from "react";
import axios from 'axios';
import authHeader from '../authHeader';
import './DonationBox.css';
import api from "../api";

function DonationBox (props) {

    const [amount, setAmount] = useState(0);
    const [loginErrorMessage, setLoginErrorMessage] = useState("");

    const charityId = props.charity.id;

    const donate = (amount) => {
      
        axios
            .post(api + "donation/donate", {charityId,amount}, { headers: authHeader() })
            .then((res) => {
                if (res.data.error) {
                    console.log(res.data);
                }
                else {
                    console.log(res.data);
                    window.location.reload();
                }
            })

    }

    const handleAmountChange = (e) => {
        e.preventDefault();

        setAmount(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (amount <= 0) {
            setLoginErrorMessage("Please enter amount bigger than 0");
            return;
        } else {
            donate(amount)
        }
    };

    return (
        <form method="post" id="donation-form" onSubmit={handleFormSubmit}>
            <div class="donation-container">
                <p>{loginErrorMessage}</p>
                <h1>Donate</h1>
                <div class="textbox">
                    <input type="number" placeholder="Amount" id="amount" name="amount" onChange={handleAmountChange} /><br />
                </div>

                <input className="donation-button2" type="submit" value="Donate" id="btnDonate" />

            </div>
        </form>
    )

}
export default DonationBox

