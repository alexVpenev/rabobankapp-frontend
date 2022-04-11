import React, { Component, useEffect, useState } from "react";
import './CharitySubscribe.css';
import axios from "axios";
import authHeader from "../authHeader";
import { useParams } from "react-router-dom";
import api from "../api";

function CharitySubscribe({ open, onClose }) {

    const [isOpen, setIsOpen] = useState(false);


    const [videoLink, setVideoLink] = useState([]);
    const [videoID, setVideoID] = useState();
    const [description, setDescription] = useState("");
    let { id } = useParams();
    let charityID = id;

    useEffect(() => {
        axios
            .get(api + `charity/video/${id}`, { headers: authHeader() })
            .then(res => {
                setVideoLink(res.data);
                //console.log(res.data);
            })

        //setCounter(videoLink.length-1)


    }, [])
    if (!open) return null;

    const subscribe = () => {
        axios
            .post(api + "subscribe", { charityID, videoID, description }, { headers: authHeader() })
            .then((res) => {
                if (res.data.error) {
                    console.log(res.data);
                    alert("Something went wrong");
                }
            })
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault();

        setDescription(e.target.value);
    };

    const close = () => {
        onClose();
    }

    return (
        <>


            <div className="subscribe-popup-background"></div>
            <div className="subscribe-popup">
                <div className="modal_content">
                    <button onClick={close} className="payment-close-button">Close</button>
                    <form onSubmit={subscribe}>
                        <h3 className="sub-header">Chose the videos you want to show on your supported page!</h3>

                        {videoLink.map((videoLink, index) => (
                            <div className="subscribe-pop-up">

                                <img className="player-scroll-btn" src={'https://i.ytimg.com/vi/' + videoLink.videoLink + '/hqdefault.jpg'}></img>
                                <div className="sub-info">
                                    <h4>{videoLink.description}</h4>

                                    <input type="checkbox" onClick={() => setVideoID(videoLink.id)} />
                                </div>
                            </div>

                        ))}

                        <br />

                        <input className="sub-desc" type="text" placeholder="You can enter a message with the reason for your support." onChange={handleDescriptionChange} />

                        <input className="charity-subscribe-submit" type="submit" value="Subscribe" />

                    </form>
                </div>
            </div>
        </>
    )
}

export default CharitySubscribe
