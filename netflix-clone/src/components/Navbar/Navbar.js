import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <h1>
                Netflix Clone
            </h1>
            <h3>
                <Link to="/">Home</Link>
            </h3>
        </nav>
    )
}

export default Navbar;