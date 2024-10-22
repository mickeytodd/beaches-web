import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './TopRatedBeaches.css';

function TopRatedBeaches() {

    const location = useLocation();
    const { topBeaches } = location.state || { topBeaches: [] };

    if (!topBeaches.length) {
        return <div>No top-rated beaches available.</div>;
    }

    return (
        <div className='top-rated-beaches-page'>
            <h2>Top Rated Beaches</h2>
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
    );
}

export default TopRatedBeaches;
