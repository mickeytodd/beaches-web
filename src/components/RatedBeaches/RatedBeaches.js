import React from 'react';
import { Link } from 'react-router-dom';
import './RatedBeaches.css';

function RatedBeaches({ data }) {

    const topBeaches = [...data].sort((a, b) => b.rating - a.rating).slice(0, 4);
    const recentlyRated = [...data].slice(0, 4);

    return (
        <div className='beaches-section'>

            <div className='rated-beaches'>
                <h2 className='rated-beaches__title'>Recently Rated Beaches</h2>
                <div className="rated-beaches__cards">
                    {recentlyRated.map(beach => (
                        <div key={beach.id}>
                            <Link to={`/beach-details/${beach.id}`} className='rated-beaches__link'>
                                <div className='rated-beach__wrapper'>
                                    <img src={beach.image} alt={beach.title} className='rated-beach__image' />
                                    <h3 className='rated-beach__title'>{beach.title}</h3>
                                    <p className='rated-beach__location'>{beach.location}</p>
                                    <p className='rated-beach__rating'>Rating: {beach.rating}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className='top-beaches'>
                <h2 className='top-beaches__title'>Top Beaches</h2>
                <div className="top-beaches__cards">
                    {topBeaches.map(beach => (
                        <div key={beach.id}>
                            <Link to={`/beach-details/${beach.id}`} className='rated-beaches__link'>
                                <div className='top-beach__wrapper'>
                                    <img className='top-beach__image' src={beach.image} alt={beach.title} />
                                    <h3 className='top-beach__title'>{beach.title}</h3>
                                    <p className='top-beach__location'>{beach.location}</p>
                                    <p className='top-beach__rating'>Rating: {beach.rating}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default RatedBeaches;
