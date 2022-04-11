import { useEffect, useState } from "react";
import axios from "axios";
import authHeader from "../authHeader";
import api from "../api";

const DonationHistory = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {

        const getDonations = () => {
            axios
                .get(`http://localhost:8080/donation/byAccount`, { headers: authHeader() })
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data)
                    } else {
                        setDonations(res.data);
                    }
                })
        }
        getDonations();
    }, []);

    return (
        <div className="history-container">
            {donations && (
                <table className="recent-conatiner">
                    <h2>Donation History</h2>
                    <tr className="recent-box-headers">
                        <td>Charity</td>
                        <td>Date</td>
                        <td>IBAN</td>   
                        <td className="amount">Amount</td>
                    </tr>
                    {donations.map((donation, index) => (
                        <tr className="recent-box-item">   
                            <td>{donation.charityName} </td>
                            <td>{donation.date} </td>
                            <td>{donation.iban}</td>
                            <td className="amount">{donation.amount} €</td>
                        </tr>
                    ))}
                </table>
            )}
        </div>
    )
}

export default DonationHistory