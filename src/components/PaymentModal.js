import './PaymentModal.css'
import { useState } from "react";
import axios from 'axios';
import authHeader from '../authHeader';
import './PaymentDecision.css'
import api from '../api';

function PaymentModal({ user, open, onClose }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [receiverIban, setReceiverIban] = useState("");

    const id = user.id;
    let today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    const makePayment = () => {

        axios
            .post(api + "transactions/send", { id, receiverIban, amount,description, date }, { headers: authHeader() })
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

    const handleIbanchange = (e) => {
        e.preventDefault();
        setReceiverIban(e.target.value)
    }


    const handleDescriptionchange = (e) => {
        e.preventDefault();
        setDescription(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (user.balance < amount) {
            setErrorMessage("Your balance is not enough to make this transaction. Please try again")
            return;
        }
        makePayment();
        window.location.reload();

    }
    const close = () => {
        setErrorMessage("");
        onClose();

    }

    return (
        <>
            <form method="post" id="login-form" onSubmit={handleFormSubmit}>
                <div className="payment-popup-background"></div>
                <div className="payment-popup">
                    <button onClick={close} className="payment-close-button">Go back</button>

                    <div className="payment-information">
                        <h2>Payment information</h2>

                        <div className="textbox">
                            <input type="number" placeholder="Amount" id="amount" name="amount" onChange={handleAmountchange} /><br />
                        </div>
                        <div className="textbox">
                            <input type="text" placeholder="Receiver IBAN" id="username" name="username" onChange={handleIbanchange} /><br />
                        </div>

                        <div className="payment-description">
                            <textarea className='payment-description' placeholder="Descrition for payment" id="des" name="des" onChange={handleDescriptionchange} /> <br />
                        </div>

                        <input class="button-debit-card" type="submit" value="Make payment" id="btnSubmit" />
                        <h3>{errorMessage}</h3>
                    </div>

                </div>

            </form>
        </>
    )
}
export default PaymentModal