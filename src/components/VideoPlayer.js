import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import authHeader from "../authHeader";
import './VideoPlayer.css'
import CharityCard from "./CharityCard";
import CharitySubscribe from "./CharitySubscribe";
import leftArrow from "../images/left-arrow.png"
import rightArrow from "../images/right-arrow.png"
import api from "../api";


function VideoPlayer(props) {

    const [videoLink, setVideoLink] = useState([{}]);
    const [counter, setCounter] = useState(0);
    //const [anotherCounter, setAnotherCounter] = useState(0);
    let { id } = useParams();
    const [state, setState] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        axios
            .get(api + `charity/video/${id}`, { headers: authHeader() })
            .then(res => {
                if (res.data.error) {
                    alert("Something went wrong!")
                } else {
                    setVideoLink(res.data);
                }

                //console.log(res.data);
            })
        //setCounter(videoLink.length-1)


    }, [])


    function switchVideo() {

        setState(0)

        //setCounter(index);
        //console.log(index);
    }

    function changeVideo() {
        if (counter < videoLink.length - 1) {
            setCounter(counter + 1)
        } else {
            setCounter(0)
        }
        //setCounter(index);
        //console.log(index);
    }

    function goBackVideo() {
        if (counter == 0) {
            setCounter(videoLink.length - 1)
        } else {
            setCounter(counter - 1)
        }
        //setCounter(index);
        //console.log(index);
    }

    function checkVideo(index) {
        if (counter == index) {
            return true;
        } else {
            return false;
        }
    }

    function togglePop() {

        setState(!state);
    };

    return (
        <div className="charity-video-player">

            <YouTube videoId={videoLink[counter].videoLink} className="charity-video" />

            <div>
                {videoLink &&
                    (
                        videoLink.map((link, index) => (
                            checkVideo(index) ?
                                <img className="player-scroll" src={'https://i.ytimg.com/vi/' + link.videoLink + '/hqdefault.jpg'}></img>

                                :

                                <img onClick={() => setCounter(index)} className="player-scroll-btn" src={'https://i.ytimg.com/vi/' + link.videoLink + '/hqdefault.jpg'}></img>


                        ))

                    )}
            </div>

            <button className="subscribe-btn" onClick={() => setIsOpen(true)}>Subscribe</button>
            <CharitySubscribe open={isOpen} onClose={() => setIsOpen(false)} />


        </div>
    )
}

export default VideoPlayer;