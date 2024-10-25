import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import './RatedBeaches.css';

function RatedBeaches({ data }) {
    const navigate = useNavigate();

    const topBeaches = [...data].sort((a, b) => b.rating - a.rating).slice(0, 4);
    const recentlyRated = [...data].slice(0, 4);

    const handleTopBeachesClick = () => {
        navigate('/top-rated-beaches', { state: { topBeaches } });
    };

    const handleRecentlyRatedBeachesClick = () => {
        navigate('/recently-rated-beaches', { state: { recentlyRated } });
    };

    return (
        <div className='rated-beaches-wrapper'>
            <div className='rated-beaches-section' onClick={handleRecentlyRatedBeachesClick}>
                <h2 className='rated-beaches__title'>Recently Rated Beaches</h2>
                <div className="rated-beaches__cards">
                    {recentlyRated.map(beach => (
                        <Card key={beach.id} beach={beach} />
                    ))}
                </div>
            </div>
            <div className='rated-beaches-section' onClick={handleTopBeachesClick}>
                <h2 className='rated-beaches__title'>Top Beaches</h2>
                <div className="rated-beaches__cards">
                    {topBeaches.map(beach => (
                        <Card key={beach.id} beach={beach} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RatedBeaches;
