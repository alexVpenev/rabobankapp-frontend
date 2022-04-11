import './Navbar.css';
import { Link } from "react-router-dom";
import searchImage from '../images/search-icon.png'

const Navbar = ({ logout, selectedPage }) => {
    return (
        <nav>
            <div class="logo"><a href="/">Rabobank</a></div>
            <ul class="links">
                <div><li><Link to="/" className={window.location.pathname === "/" ? "selected" : "normal"}>Profile</Link></li></div>
                {/* <div className={window.location.pathname === "/charities" ? "selected" : "normal"}><li><Link to="/charities" className={window.location.pathname === "/charities" ? "selected" : ""}>Charities</Link></li></div> */}
                <div className={selectedPage}><li><Link to="/charities" className={window.location.pathname === "/charities" ? "selected" : "normal"}>Charities</Link></li></div>
            </ul>
            <div class="nav-other">
                <div class="search-box">


                    <li><Link to="/profile-search" className={window.location.pathname === "/profile-search" ? "nav-search-link selected" : "nav-search-link normal"}>
                        <img src={searchImage} />
                        Search
                    </Link>
                    </li>

                </div>
            </div>
            <div class="log-button">
                {localStorage.getItem('accessToken') ?
                    <li><Link to="/" onClick={logout}>logout</Link></li>
                    :
                    <li><Link to="/">login</Link></li>
                }
            </div>
        </nav >
    );
}

export default Navbar;