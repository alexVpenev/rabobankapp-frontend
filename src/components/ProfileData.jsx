
import "./ProfileData.css";
import pic from "../images/alt.jpg";
import authHeader from "../authHeader";
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import profileIcon from '../images/profile-icon.png'
import emailIcon from '../images/email-icon.png'
import EditProfileContainer from "./EditProfileContainer";
import RaboCard from "./RaboCard";
import PaymentModal from "./PaymentModal";
import PaymentDecision from "./PaymentDecision";
import { useRouteMatch } from "react-router-dom";
import api from "../api";

const ProfileData = () => {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  let { path, url } = useRouteMatch();

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
          }
        });
    }
    getData();
  }, []);


  return (
    <div class="profile-data-card">
      <ul className="profile-nav-bar">
        <div><p><Link to="/" className={window.location.pathname === "/" ? "profile-nav-link selected-page" : "profile-nav-link"}>Dashboard</Link></p></div>
        <div><p><Link to="/supported-charities" className="profile-nav-link">Supported Charities</Link></p></div>
        <div><p><Link to="/transactions" className="profile-nav-link">Transaction History</Link></p></div>
        <div><p><Link to="/donations" className="profile-nav-link">Donation History</Link></p></div>
        <div><p><Link to="/settings" className="profile-nav-link">Settings</Link></p></div>

      </ul>

      <RaboCard user={user} />
      <p>Balance: {user.balance} €</p>

      <div>
        <button className="payment-btn" onClick={() => setIsOpen(true)}>Send money</button>

        <PaymentDecision  user={user} open={isOpen} onClose={()=> setIsOpen(false)} />
      
      </div>

    </div>
  );
}

export default ProfileData;
