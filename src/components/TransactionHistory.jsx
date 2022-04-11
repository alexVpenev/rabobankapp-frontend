import "./TransactionHistory.css";
import authHeader from "../authHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import api from "../api";

const TransactionHistory = () => {

  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState({});

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
        .get(api + `transactions/all`, { headers: authHeader() })
        .then((res) => {
          if (res.data.error) {
            console.log(res.data)
          } else {
            setTransactions(res.data);
          }
        })
    }
    getUser();
    getTransactions();
  }, []);

  return (
    <div className="history-container">
      <table className="recent-conatiner">
        <h2>Transaction History</h2>
        <tr className="recent-box-headers">
          <td>Description</td>
          <td>Date</td>
          <td>IBAN</td>
          <td className="amount">Amount</td>
        </tr>
        {transactions.map((transaction, index) => (
          <tr className="recent-box-item">
            <td>{transaction.description}</td>
            <td>{transaction.date}</td>
            <td>{transaction.iban}</td>
            <td className={user.id === transaction.senderId ? "amount sent" : "amount received"}>
              {user.id === transaction.senderId ? "-" : "+"}{transaction.amount} €
              </td>
          </tr>
        ))}

      </table>
    </div>
  );
}

export default TransactionHistory;
