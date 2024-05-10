import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ModalMovie() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const getData = () => {
        const url = "http://localhost:3001/trending";
        axios.get(url).then(
            response => setData(response.data.filter(movie => movie.id == id)[0])
        ).catch(error => setData(error.toString()));
    }

    useEffect(()=> getData(),[]);

    return (<>
    <div>{data.overview}</div>
    </>)
}

export default ModalMovie;