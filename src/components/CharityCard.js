import './CharityCard.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from '../authHeader';
import api from '../api';


const CharityCard = props => {

    const [charityPicturePath, setCharityPicturePath] = useState();
    let { id } = useParams();
    //let image = "../images/alt.jpg";

    useEffect(() => {
        axios
              .get(api + `charity/photo/${props.charity.id}`,{responseType: 'blob'}, { headers: authHeader() })
            .then(res => {
               setCharityPicturePath(URL.createObjectURL(res.data))
            })

    }, [])
   
    return (
        <div className="charity-card">
            <Link to={"/charity/" + props.charity.id} className="charity-card-link">
                <div className="charity-card-photo">
                    <img className="charity-card-photo" src= {charityPicturePath} />
                </div>
                <div className="charity-card-info">
                    <h1>{props.charity.title}</h1>
                    <p>{props.charity.description.slice(0, 100)}...</p>
                </div>

            </Link>
        </div>
    )

}

export default CharityCard;