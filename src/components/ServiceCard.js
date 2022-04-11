import { Link } from 'react-router-dom'
import './ServiceCard.css'

const ServiceCard = ({ title, description, imagePath, link }) => {
    return (
        <div className="service-card">
            <a href={link} className="service-card-link">
                <div className="service-card-photo">
                    <img src={imagePath} />
                </div>
                <div className="service-card-info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="service-more-btn">Learn more</div>
            </a>
        </div>
    )
}

export default ServiceCard