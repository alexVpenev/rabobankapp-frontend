import './AboutComponent.css'
import logo from "../images/rabobank-logo.png"

const AboutComponent = () => {
    return (
        <div className="about-section-container" id="about">
            <div className="about-container">
                <img src={logo} />
                <div className="about-info">
                    <h1>About us</h1>
                    <p>Rabobank is a bank that is run for clients. Established in the Netherlands, we have grown to become an international financial services provider,
                        active in the area of banking, capital management, leasing, insurance and real estate. We are a cooperative bank with agricultural roots.
                        We know the agricultural sector like no other. Moreover, it is our ambition to be the global leading food and agri bank.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent