import CharityRow from "../components/CharityRow";
import CharitySlider from "../components/CharitySlider";
import { useEffect } from "react";
import './CharityPage.css'
import { CLIENT_RENEG_LIMIT } from "tls";

const CharityPage = props => {

    useEffect(() => {
        props.triggerPageChange('selected')
    }, [])

    return(
        <div className="charity-page">
            <CharitySlider/>
            <CharityRow/>
       </div>
    );
}


export default CharityPage;