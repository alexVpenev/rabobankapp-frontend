import {useEffect, useState} from "react";
import axios from "axios";
import authHeader from "../authHeader";
import Subscription from "./Subscription";
import CharityCard from "./CharityCard";
import './SubscriptionsRow.css'
import { createBrowserHistory } from "history";
import api from "../api";

const SubscriptionsRow = () => {

    const [subscriptions, setSubscriptions] = useState([]);

    const history = createBrowserHistory();

    useEffect(() => {

        axios
            .get(api + `subscribe/personal`, { headers: authHeader() })
            .then(res => {
                setSubscriptions(res.data);
                //console.log(res.data);
            })

    }, [])

    const deleteSubscription = (subID) => {

        axios
            .post(api + `subscribe/delete`, {subID}, { headers: authHeader() })
            .then(() => console.log('Delete successful'));


        if(window.confirm("Are you sure you want to unsubscribe from this charity?")){
            history.push("/");
            window.alert("Subscription removed.");
            window.location.reload();
            
        }
    }


    return (
        <div className="supported-page">
        <h2>Your Subscriptions</h2>

            {subscriptions.map((subscription, index) => (
                <div className="subscription">
                <Subscription subscription={subscription} key={index}/>
                <button className="unsub-btn" onClick={() => deleteSubscription(subscription.id)}>Unsubscribe</button>
                </div>
            ))}

        </div>
    );
};

export default SubscriptionsRow;