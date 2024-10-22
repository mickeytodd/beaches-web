import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './RecentlyRatedBeaches.css';

function RecentlyRatedBeaches() {

    const location = useLocation();
    const { recentlyRated } = location.state || {};

    if (!recentlyRated) {
        return <div>No recently rated beaches available.</div>;
    }

    return (
        <div className='recently-rated-beaches-page'>
            <h2>Recently Rated Beaches</h2>
            <div className="recently-beaches__cards">
                {recentlyRated.map(beach => (
                    <div key={beach.id}>
                        <Link to={`/beach-details/${beach.id}`} className='rated-beaches__link'>
                            <div className='recently-beach__wrapper'>
                                <img className='recently-beach__image' src={beach.image} alt={beach.title} />
                                <h3 className='recently-beach__title'>{beach.title}</h3>
                                <p className='recently-beach__location'>{beach.location}</p>
                                <p className='recently-beach__rating'>Rating: {beach.rating}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentlyRatedBeaches;
