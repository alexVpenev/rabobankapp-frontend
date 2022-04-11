import './CharitySlide.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from '../authHeader';
import BtnSlider from './BtnSlider';
import api from '../api';

const CharitySlide = props => {
    const [charityPicturePath, setCharityPicturePath] = useState('');
    let { id } = useParams();

   
    useEffect(() => {
        axios
              .get(api + `charity/photo/${props.charity.id}`,{responseType: 'blob'}, { headers: authHeader() })
            .then(res => {
               setCharityPicturePath(URL.createObjectURL(res.data))
            })
    })

   
    return (
        <div className="charity-slide">
            <Link to={"/charity/" + props.charity.id} className="charity-slide-link">
                <img className="charity-slide-photo" src={charityPicturePath} />
                <div className="charity-slide-info">
                    <h1>{props.charity.title}</h1>
                    {/* <p>{props.charity.description}</p> */}
                </div>
            </Link>
           
        </div>
    )
}

export default CharitySlide;