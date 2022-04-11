import './DonationList.css'
import Donation from './Donation';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import CharityCard from "./CharityCard";
import api from '../api';

function DonationList(props) {

    const [donations, setDonations] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const getData = () => {
            axios
                .get(api + `donation/${id}`)
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data);
                        alert("Something went wrong");
                    } else {
                        setDonations(res.data);
                    }
                })
        }
        getData();
    }, [])



    return (
        <div className="donation-list">
            Recent donations
            {donations.map((donation, index) => (
                <Donation donation={donation} key={index}></Donation>
            ))}
        </div>
    )
}

export default DonationList;