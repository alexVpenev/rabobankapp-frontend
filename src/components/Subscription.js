import axios from "axios";
import authHeader from "../authHeader";
import {useEffect, useState} from "react";
import YouTube from "react-youtube";
import BtnSlider from "./BtnSlider";
import './SubscriptionsCard.css'

const Subscription = (props) => {

    const [links, setLinks] = useState([]);

    useEffect(() => {
        setLinks(props.subscription.videoLinks)
    }, [])


    return (
        <div className="subscription-card">
            <h2>{props.subscription.charity_name}</h2>
            <h3>{props.subscription.description}</h3>

            <YouTube videoId={props.subscription.videoLink} className="charity-video" />
        </div>
    );
};

export default Subscription;