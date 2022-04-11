import './DonationDecision.css'
import { useState } from "react";
import DonationModal from './DonationModal';
import PaymentModal from './PaymentModal';
import idealImage from '../images/ideal_logo.png'
import paypalImage from '../images/PayPal.svg.png'

function DonationDecision({ user, charity, open, onClose }) {

    const [isOpen, setIsOpen] = useState(false);

    if (!open) return null;


    const close = () => {
        onClose();
    }

    return (
        <div className="payment-popup-background">
            <div className="payment-popup">
                <button onClick={close} className="payment-close-button">Close</button>
                <h1>Choose one of the following payment methods:</h1>
                <div className="payment-methods">
                    <a href="https://www.ideal.nl/">
                        <img className="ideal-logo" src={idealImage} />

                    </a>

                    <a href="https://www.paypal.com/nl/home">
                        <img className="paypal-logo" src={paypalImage} />

                    </a>
                </div>

                <h2 className='or'><span>OR</span></h2>

                <button className="button-debit-card" onClick={() => setIsOpen(true)}>Credit or Debit card</button>
                <DonationModal user={user} charity={charity} open={isOpen} onClose={() => setIsOpen(false)}></DonationModal>
            </div>
        </div>
    )
}
export default DonationDecision