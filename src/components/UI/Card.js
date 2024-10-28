import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ beach, onClick }) {
    return (
        <div onClick={onClick} className='beach-card__wrapper'>
            <img src={beach.image} alt={beach.title} className='beach-card__image' />
            <div>
                <h3 className='beach-card__title'>{beach.title}</h3>
                <p className='beach-card__location'>{beach.location}</p>
                <p className='beach-card__rating'>Rating: {beach.rating}</p>
            </div>
        </div>
    );
}

export default Card;
