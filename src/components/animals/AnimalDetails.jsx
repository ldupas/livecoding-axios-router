import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AnimalDetails = () => {
    const [animalInfos, setAnimalInfos] = useState([]);
    const params = useParams();

    const url = "http://localhost:3000/animals/"

    useEffect(() => {
        axios
        .get(`${url}${params.id}`)
        .then((res) => res.data)
        .then((data) => setAnimalInfos(data))
    }, [params.id])

  return (
    <div>
        {animalInfos.name}
    </div>
  )
}

export default AnimalDetails