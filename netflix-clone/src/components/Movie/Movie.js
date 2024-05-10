
import image from '../../data/default-image.jpg';
import './Movie.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Movie({ movie }) {
    return (
        <div className="card-border-wrap">
            <div className="card">
                <img src={image} />
                <p>{movie.title || "No Title"}</p>
                <Link to={`/movie/${movie.id}`}>
                    {/* <Button variant="outline-primary" onClick={console.log('shit')}>Add To Favorite</Button> */}
                    <div class="btn">
                        <a href="#"><span>Add To Favorite</span></a>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Movie;