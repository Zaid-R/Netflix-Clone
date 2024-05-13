import './MovieList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie.js';
import Spinner from 'react-bootstrap/Spinner';

function MovieList({isFav = false}) {
    const [data, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const getData = () => {
        const url = `${process.env.REACT_APP_serverURL}/${isFav?'getMovies':'trending'}`;
        axios.get(url).then(
            response => {
                setData(response.data)
                setIsLoading(false)
            }
        ).catch(error => setData(error.toString()));
    }

    function refreshPage(data){
        setData(data);
    }
    useEffect(() => getData(),[]);

    return (<>
            {isLoading?<Spinner animation="border" />: data.length==0?"There is no data": data.map(movie =>
                <Movie movie={movie} isFav={isFav} refreshPage={refreshPage}/>
                )}
    </>);
}

export default MovieList;