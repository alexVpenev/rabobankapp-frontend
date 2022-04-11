import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import authHeader from "../authHeader";
import Subscription from "../components/Subscription";
import './AccountDetailsView.css'
import pic from "../images/alt.jpg"

const AccountDetailsView = () => {

    const [subs, setSubs] = useState();

    useEffect(() => {
        setSubs({ account: JSON.parse(localStorage.getItem("pageData")) });
        // localStorage.removeItem("pageData")
    }, [])


    return (
        <div className="selected-profile-container">
            <div className="selected-profile-data">
                <div className="selected-profile-picture-box">
                    <img src={pic} alt="" />
                </div>
                <div className="selected-profile-details">
                    <h1>{subs?.account?.firstName} {subs?.account?.lastName}</h1>

                    <div className="selected-profile-detail">
                        {/* <img src={profileIcon} /> */}
                        <p>Username: {subs?.account?.username}</p>
                    </div>
                    <div className="selected-profile-detail">
                        <p>IBAN: {subs?.account?.iban}</p>
                    </div>
                </div>
            </div>
            {subs && (
                <div className="selected-subscription-row">
                    <h1>Supported charities</h1>
                    {subs?.account?.subs.map((subscription, index) => (
                        <Subscription subscription={subscription} key={index} />
                    ))}
                </div>
            )}


        </div>
    )
}

export default AccountDetailsView