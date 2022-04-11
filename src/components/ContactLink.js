import './ContactLink.css'

const ContactLink = ({ image, link }) => {
    return (
        <div className="contact-link">
            <a href={link}>
                <img src={image} className="contact-icon"/>
            </a>
        </div>
    )
}

export default ContactLink