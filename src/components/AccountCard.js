import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import authHeader from "../authHeader";
import './AccountCard.css'
import profileIcon from '../images/profile-icon.png'
import { Link } from "react-router-dom";

const AccountCard = (props) => {

    const [subs, setSubs] = useState();

    useEffect(() => {
        setSubs(props.account.subs);
    }, [])

    const funct = () => {
        localStorage.setItem("pageData", JSON.stringify(props.account));
    }

    return (
            <Link className="account-search" to="/account" onClick={() => funct()}>
                <img src={profileIcon} />
                <p>{props.account.username}<br /> {props.account.iban}</p></Link>
    )
}

export default AccountCard