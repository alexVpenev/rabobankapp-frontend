import ContactLink from './ContactLink'
import './ContactsComponent.css'
import facebookLogo from '../images/facebook-logo.png'
import instagramLogo from '../images/instagram-logo.png'
import linkedinLogo from '../images/linkedin-logo.png'
import twitterLogo from '../images/twitter-logo.png'
import youtubeLogo from '../images/youtube-logo.png'

const ContactsComponent = () => {
    return (
        <footer className="contacts-container">
            <p>Check out our social medias!</p>
            <div className="contact-links-container">
                <ContactLink image={facebookLogo} link={"https://www.facebook.com/rabobank"} />
                <ContactLink image={instagramLogo} link={"https://www.instagram.com/rabobank"} />
                <ContactLink image={linkedinLogo} link={"https://www.linkedin.com/company/rabobank"} />
                <ContactLink image={twitterLogo} link={"https://twitter.com/rabobank"} />
                <ContactLink image={youtubeLogo} link={"https://www.youtube.com/user/rabobank"} />
            </div>
        </footer>
    )
}

export default ContactsComponent