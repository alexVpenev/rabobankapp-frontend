import './CharityPageInfo.css';
import YouTube from 'react-youtube';
import VideoPlayer from "./VideoPlayer";

function CharityPageInfo(props) {
    return (
        <div className="charity-page-info-conatiner">
            <h1 className="charity-page-title">{props.charity.title}</h1>
            <div className="charity-page-img"><VideoPlayer charity={props.charity} /></div>
            <div className="charity-page-description"><p>{props.charity.description}</p></div>
        </div>
    )
}

export default CharityPageInfo;