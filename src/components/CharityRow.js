import './CharityRow.css'
import CharityCard from './CharityCard'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, Link } from "react-router-dom";
import axios from 'axios';
import authHeader from '../authHeader';
import api from '../api';


const CharityRow = () => {
    const [charities, setCharities] = useState(null);

    const getData = async () => {
        
        const data = await axios.get(api + "charity", { headers: authHeader() })
        setCharities(data.data);

      /*  axios
            .get("http://localhost:8080/charity", {headers: authHeader(), })
            .then((res) => {
                if (res.data.error) {
                    console.log(res.data);
                    alert("Something went wrong");
                } else {
                    setCharities(res.data);
                  
                }
            });*/
    }

    useEffect(() => {
        
        getData();
    }, []);

    return (
        <div className="charity-row-wrapper">
            <h1>List of All Charities</h1>

            {charities && (
                <div className="charity-row">
                    {charities.map((charity, index) => (
                        <CharityCard charity={charity} key={index}/>
                    ))}

                </div>
            )
            }
        </div>
    )
}

export default CharityRow