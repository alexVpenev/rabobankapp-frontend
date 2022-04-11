import './DonationModal.css'
import { useState } from "react";
import axios from 'axios';
import authHeader from '../authHeader';
import { createBrowserHistory } from "history";
import api from '../api';

function PaymentModal({ user, charity, open, onClose }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [amount, setAmount] = useState(0);
    const history = createBrowserHistory();
  

    let today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const charityId = charity.id;
  

    const makeDonation = () => {

        axios
            .post(api + "donation/donate", { charityId, amount, date }, { headers: authHeader() })
            .then((res) => {
                if (res.data.error) {
                    alert(res.data);
                }

            })
    }

    if (!open) return null;

    const handleAmountchange = (e) => {
        e.preventDefault();

        setAmount(e.target.value)
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (user.balance < amount) {
            setErrorMessage("Your balance is not enough to make this transaction. Please try again")
            return;
        }
        makeDonation();
        history.push("/");
        window.location.reload();

    }
    const close = () => {
        setErrorMessage("");
        onClose();

    }

    return (
        <>
            <form method="post" id="form" onSubmit={handleFormSubmit}>
                <div className="payment-popup-background"></div>
                <div className="payment-popup">
                    <button onClick={close} className="payment-close-button">Go back</button>

                    <div className="payment-information">
                        <h2>Donation information</h2>

                        <div className="textbox">
                            <input type="number" placeholder="Amount" id="amount" name="amount" onChange={handleAmountchange} /><br />
                        </div>
                        <p>Charity iban:</p>
                        <div className="textbox">
                            <input type="text" value={charity.iban} id="iban" name="iban" readOnly /><br />
                        </div>


                        <input class="button-debit-card" type="submit" value="Make donation" id="btnSubmit" />
                        <h3>{errorMessage}</h3>
                    </div>

                </div>

            </form>
        </>
    )
}
export default PaymentModal