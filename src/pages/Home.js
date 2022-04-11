import AboutComponent from "../components/AboutComponent";
import CharitySlider from "../components/CharitySlider";
import ContactsComponent from "../components/ContactsComponent";
import ServiceComponent from "../components/ServiceComponent";
import WelcomeComponent from "../components/WelcomeComponent";
import './Home.css'

function Home(){
    return(
        <div className="home-page">
            {/* <WelcomeComponent/>
            <AboutComponent/> */}
            <ServiceComponent />
            
            <ContactsComponent/>
       </div>
    );
}


export default Home;