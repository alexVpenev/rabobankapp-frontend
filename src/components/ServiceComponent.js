import ServiceCard from './ServiceCard'
import './ServiceComponent.css'
import transferImage from '../images/transfer.PNG'
import donationImage from '../images/donation-image.png'


const ServiceComponent = () => {
    return (
        <div className="services-section-container" id="services">
            <h1 className="services-section-header">What we can offer you on this site</h1>
            <div className="services-container">
                <ServiceCard title={"Transactions"} description={"Transfering money between accounts has never been easier!"} imagePath={transferImage} link={"/profile"}/>
                <ServiceCard title={"Donations"} description={"Every donation can make a difference. Take a look at some of our charities."} imagePath={donationImage} link={"#slider"}/>
            </div>
        </div>
    )
}


export default ServiceComponent