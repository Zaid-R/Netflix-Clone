
import './Movie.css';
import { useEffect, useState } from "react";
import ModalMovie from '../ModalMovie/ModalMovie.js';

function Movie({ movie }) {
    const [isShown, setIsShow] = useState(false);
    const handleClose = ()=>setIsShow(false);
    const handleShowModal = ()=>{
        setIsShow(true)
        console.log("isShown from handle show modal : ", isShown)
    }
    
    useEffect(()=> console.log("isShown in first render : ", isShown),true)
    return (
        
    <>
    <div className="card-border-wrap" key={movie.id}>
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
            <p>{movie.title || "No Title"}</p>
                <button onClick={handleShowModal}>
                    <p><span>Add To Favorite</span></p>
                </button>
        </div>
    </div>
         <ModalMovie movie={movie} handleClose={handleClose} isShown={isShown}/>
    </>

    );
}

export default Movie;