import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import axios from 'axios';
import CharityPageInfo from "../components/CharityPageInfo";
import CharityPageDonationContainer from "../components/CharityPageDonationContainer";
import authHeader from "../authHeader";
import api from "../api";

function Charity(){
    const [charity, setCharity] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios
            .get(api + `charity/${id}`, {headers: authHeader()})
            .then(res => {
                setCharity(res.data);
               
            })

    }, [])
    return(
        <div className="charity-page">
            <CharityPageInfo charity={charity}/>
            <CharityPageDonationContainer charity={charity}/>
        </div>
    )
}

export default Charity;