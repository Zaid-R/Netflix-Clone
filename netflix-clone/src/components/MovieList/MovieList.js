import './MovieList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie.js';

function MovieList() {
    const [data, setData] = useState([]);
    const getData = () => {
        const url = "http://localhost:3001/trending";
        axios.get(url).then(
            response => setData(response.data)
        ).catch(error => setData(error.toString()));
    }

    useEffect(() => getData(),[]);

    return (<>
            {data.map(movie =>
                <Movie movie={movie}/>
                )}
    </>);
}

export default MovieList;