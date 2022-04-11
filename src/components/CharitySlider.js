import './CharitySlider.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CharitySlide from "./CharitySlide";
import BtnSlider from './BtnSlider';
import { Link } from 'react-router-dom';
import api from '../api';

const CharitySlider = () => {
    const [charities, setCharities] = useState([{}, {}, {}]);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const getData = () => {
            axios
                .get(api + "charity")
                .then((res) => {
                    if (res.data.error) {
                        console.log(res.data);
                        alert("Something went wrong");
                    } else {
                        setCharities(res.data);
                        //console.log(res.data);
                    }
                    setSlideIndex(0);
                });
        }
        getData();
    }, []);


    function SlideForward() {

        if (slideIndex < 2) {
            setSlideIndex(slideIndex + 1);
        } else {
           setSlideIndex(0);
        }

    }

    function SlideBackwards() {

        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(2);
        }

    }
    return (
        <div className="charity-slider-container" id="slider">
            <h1 className="charity-slider-header">Here are some charities you might be interested in</h1>
            <div className="charity-slider">
                <CharitySlide charity={charities[slideIndex] } />
                <BtnSlider moveSlide={SlideBackwards} direction={"prev"} />
                <BtnSlider moveSlide={SlideForward} direction={"next"} />
            </div>
            <h1 className="charity-slide-info">{charities[slideIndex].title}</h1>
            {/* <p className="charity-slider-more">You can browse all charities <Link to="/charities" className="charity-slider-link">here</Link>.</p> */}
        </div>
    )
}

export default CharitySlider