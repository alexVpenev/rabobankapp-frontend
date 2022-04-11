import axios from 'axios';
import { useState, useEffect } from 'react';
import './Dashboard.css'
import authHeader from '../authHeader';
import ProductRow from './ProductRow';
import api from '../api';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState({});
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const getUser = () => {
            axios
                .get(api + "account/user", { headers: authHeader(), })
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data);
                        alert("Something went wrong");
                    } else {
                        setUser(res.data);
                    }
                });
        }

        const getTransactions = () => {
            axios
                .get(api + `transactions/recent`, { headers: authHeader() })
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data)
                    } else {
                        setTransactions(res.data);
                    }
                })
        }
        const getDonations = () => {
            axios
                .get(api + `donation/recent`, { headers: authHeader() })
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data)
                    } else {
                        setDonations(res.data);
                    }
                })
        }
        getUser();
        getTransactions();
        getDonations();
    }, []);
    return (
        <div className="dashboard-container">
            <table className="recent-conatiner">
                <h2>Recent Donations</h2>
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

            <table className="recent-conatiner transactions">
                <h2>Recent Transactions</h2>
                <tr className="recent-box-headers">
                    <td>Description</td>
                    <td>Date</td>
                    <td>IBAN</td>
                    <td className="amount">Amount</td>
                </tr>
                {transactions.map((transaction, index) => (
                    <tr className="recent-box-item">
                        <td>{transaction.description}</td>
                        <td>{transaction.date} </td>
                        <td>{transaction.iban}</td>
                        <td className={user.id === transaction.senderId ? "amount sent" : "amount received"}>
                            {user.id === transaction.senderId ? "-" : "+"}{transaction.amount} €
                        </td>
                    </tr>
                ))}
            </table>

            <ProductRow />
        </div>
    )
}

export default Dashboard