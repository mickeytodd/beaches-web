import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ beach }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/beach-details/${beach.id}`);
    };

    return (
        <div onClick={handleClick} className='beach-card__wrapper'>
            <img src={beach.image} alt={beach.title} className='beach-card__image' />
            <h3 className='beach-card__title'>{beach.title}</h3>
            <p className='beach-card__location'>{beach.location}</p>
            <p className='beach-card__rating'>Rating: {beach.rating}</p>
        </div>
    );
}

export default Card;
