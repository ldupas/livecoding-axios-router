import { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalList.css'
import Animal from './Animal';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    const url = "http://localhost:3000/animals"

    useEffect(() => {
        axios
        .get(url)
        .then((res) => res.data)
        .then((data) => setAnimals(data))
    }, [])

    return (
        <div className="AnimalList">
            <h2 className="section-title AnimalList-title">Venez faire de belles rencontres dans notre Zoo !</h2>
            <div className='cards-container'>
                { animals &&
                animals.map((animal) => (
                    <div key={animal.id}>
                        <Animal animal={animal} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimalList