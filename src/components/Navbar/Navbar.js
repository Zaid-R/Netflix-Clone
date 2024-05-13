import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <h1>
                Netflix Clone
            </h1>
            <span>
                <h4>
            <Link to="/favlist">Favorite List
                </Link>
            </h4>
            <h4>
                <Link to="/">Home</Link>
            </h4>
            </span>
            
            
        </nav>
    )
}

export default Navbar;