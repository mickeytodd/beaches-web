import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../UI/Card';
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
                    <Card key={beach.id} beach={beach} />
                ))}
            </div>
        </div>
    );
}

export default TopRatedBeaches;
