import './Donation.css'
import { useEffect, useState } from "react";
import axios from "axios";
import authHeader from '../authHeader';
import donationIcon from '../images/donation-icon.png'
import api from '../api';

function Donation(props) {

    const [donator, setDonator] = useState([]);
    const donation = props.donation;


    useEffect(() => {
        axios
            .get(api + `account/${donation.accountID}`, { headers: authHeader() })
            .then(res => {
                setDonator(res.data);
            })

    }, [])


    return (
        <button className="donation">
            <div className="single-donation-heading">
                <img src={donationIcon} />
                <h2>Anonymous</h2>
            </div>
            <h3>€{donation.amount}</h3>
        </button>
    )
}

export default Donation;