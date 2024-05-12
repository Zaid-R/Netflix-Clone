
import './Movie.css';
import { useEffect, useState } from "react";
import ModalMovie from '../ModalMovie/ModalMovie.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function Movie({ movie, isFav ,refreshPage}) {
    const [isShown, setIsShown] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const handleClose = () => setIsShown(false);
    const handleShowModal = () => {
        setIsShown(true)
        console.log("isShown from handle show modal : ", isShown)
    }

    const deleteFavMovie = async () => {
        const deleteUrl = `http://localhost:3001/DELETE/${movie.id}`;
        setIsDeleting(true);
        let response = await axios.delete(deleteUrl)
        setIsDeleting(false)
        refreshPage(response.data)
        console.log("response : ",response);
        console.log(movie.id);
        console.log("movie deleted successfuly");
    }
    useEffect(() => console.log("isShown in first render : ", isShown), true)
    return (
        <>
            <div className="card-border-wrap" key={movie.id}>
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                    <p>{movie.title || "No Title"}</p>
                    {isFav &&<p className='comment'>{movie.comment}</p>}
                    
                    {
                        !isFav && <button onClick={handleShowModal}>
                            <p><span>Add To Favorite</span></p>
                        </button>
                    }{isFav && <div className='fav-buttons'>
                        <Button onClick={handleShowModal} variant="warning">Update</Button>
                        <Button onClick={isDeleting?null:deleteFavMovie} variant="danger">Delete</Button>
                    </div>}

                </div>
            </div>
            <ModalMovie movie={movie} handleClose={handleClose} isShown={isShown} isFav={isFav} refreshPage={refreshPage}/>
        </>

    );
}

export default Movie;