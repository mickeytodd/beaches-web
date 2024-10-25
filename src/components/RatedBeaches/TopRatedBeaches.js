import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import './TopRatedBeaches.css';

function TopRatedBeaches() {
    const location = useLocation();
    const navigate = useNavigate();
    const { topBeaches } = location.state || { topBeaches: [] };

    const handleBeachClick = (beachId) => {
        navigate(`/beach-details/${beachId}`);
    };

    if (!topBeaches.length) {
        return <div>No top-rated beaches available.</div>;
    }

    return (
        <div className='top-rated-beaches-page'>
            <h2>Top Rated Beaches</h2>
            <div className="top-beaches__cards">
                {topBeaches.map(beach => (
                    <Card
                        key={beach.id}
                        beach={beach}
                        onClick={() => handleBeachClick(beach.id)}
                    />
                ))}
            </div>
        </div>
    );
}


export default TopRatedBeaches;
