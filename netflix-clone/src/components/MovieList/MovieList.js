import './MovieList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie.js';
import Spinner from 'react-bootstrap/Spinner';

function MovieList() {
    const [data, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const getData = () => {
        const url = "http://localhost:3001/trending";
        axios.get(url).then(
            response => {
                setData(response.data)
                setIsLoading(false)
            }
        ).catch(error => setData(error.toString()));
    }

    useEffect(() => getData(),[]);

    return (<>
            {isLoading?<Spinner animation="border" />:data.map(movie =>
                <Movie movie={movie}/>
                )}
    </>);
}

export default MovieList;