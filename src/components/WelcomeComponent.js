import "./WelcomeComponent.css"
import welcomeImage from "../images/welcome.jpg"

const WelcomeComponent = () => {
    return (
        <div className="welcome-component-container">
            <div className="welcome-photo">
                <div className="welcome-phrase-container">
                    <p className="welcome-phrase">Growing a better <br /> world together.</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent