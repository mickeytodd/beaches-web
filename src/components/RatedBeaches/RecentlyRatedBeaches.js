import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../UI/Card';
import './RecentlyRatedBeaches.css';

function RecentlyRatedBeaches() {
    const location = useLocation();
    const { recentlyRated } = location.state || { recentlyRated: [] };

    if (!recentlyRated.length) {
        return <div>No recently rated beaches available.</div>;
    }

    return (
        <div className='recently-rated-beaches-page'>
            <h2>Recently Rated Beaches</h2>
            <div className="recently-rated-beaches__cards">
                {recentlyRated.map(beach => (
                    <Card key={beach.id} beach={beach} />
                ))}
            </div>
        </div>
    );
}

export default RecentlyRatedBeaches;
