import React from 'react';
import './Animal.css';
import { Link } from "react-router-dom"

const Animal = ({ animal }) => {
  return (
    <div className='Animal'>
        <div className='animal-cards'>
            <Link to={{ pathname: `/animal/${animal.id}`}}>
                <img className="animal-img" src={animal.image} alt={animal.name} />
            </Link>
            <div className='animal-desc'>
                <h2>{animal.name}</h2>
                <span>Espèce {animal.species}</span>
                <span>Age {animal.age}</span>
            </div>
        </div>
    </div>
  )
}

export default Animal