import './CharityPageDonationContainer.css';
import DonationList from './DonationList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import authHeader from '../authHeader';
import DonationBox from './DonationBox';
import DonationDecision from './DonationDecision';
import api from '../api';

function CharityPageDonationContainer(props) {

    let { id } = useParams();

    const [numberOfDonations, setnumberOfDonations] = useState(0);
    const [user, setUser] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        axios
            .get(api + `donation/nrOfDonations/${id}`, { headers: authHeader() })
            .then(res => {
                setnumberOfDonations(res.data);

            })

    })

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
        <div className="charity-page-donation-container">
            <div className="charity-page-donation-box">


                <div className="charity-page-donation">
                    <h3>€{props.charity.currentDonation}</h3> have been raised.
                </div>
                <p>{numberOfDonations} people have donated so far!</p>

                <button className='donation-button' onClick={() => setIsOpen(true)}>Donate</button>

                <DonationDecision user={user} charity={props.charity} open={isOpen} onClose={() => setIsOpen(false)} />



                <div style={{ overflowY: "scroll" }}>
                    <DonationList charity={props.charity} />
                </div>

            </div>
        </div>
    )
}

export default CharityPageDonationContainer