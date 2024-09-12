import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BeachDetails.css';
import star from '../../assets/images/star.png';

const BeachDetails = ({ data }) => {
    const [activeTab, setActiveTab] = useState('Features');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const { id } = useParams();

    const beachDetails = data.find(beach => beach.id === id);

    if (!beachDetails) {
        return <div>Beach details not found</div>;
    }

    return (
        <div>
            <div className="beach-details__header">
                <div className="beach-details__image-container">
                    <img className="beach-details__image" src={beachDetails.image} alt={`${beachDetails.title}`} />
                </div>
                <div className="beach-details__title-container">
                    <h1 className="beach-details__beach-name">{beachDetails.title}</h1>
                    <p className='beach-details__beach-location'>{beachDetails.location}</p>
                    <div className="beach-details__rating-container">
                        <img className="beach-details__star-icon" src={star} alt="star icon" />
                        <p className="beach-details__rating-text">4.6 (150 rates)</p>
                    </div>
                </div>
            </div>

            <div className="beach-details__tabs-wrapper">
                <ul className="beach-details__tabs">
                    <li
                        className={`beach-details__tab ${activeTab === 'Features' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Features')}
                    >
                        Features
                    </li>
                    <li
                        className={`beach-details__tab ${activeTab === 'Weather' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Weather')}
                    >
                        Weather
                    </li>
                    <li
                        className={`beach-details__tab ${activeTab === 'Rewievs' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Rewievs')}
                    >
                        Rewievs
                    </li>
                </ul>
                <div className="beach-details__tab-container">
                    <div className={`beach-details__tab-content ${activeTab === 'Features' ? 'active' : ''}`}>
                        <p>Type: Family</p>
                        <p>Activities: Surfing, Scuba Diving, Windsurfing, Romantic Diner, Camp on the beach </p>
                        <p>Facilities: Restrooms, Showers, Changing Rooms, Playgrounds, Water Sport Rentals, Volleyball court, First Aid Station, Beach Bars, Restaurants, Cafe, Lifeguard Stations, Parking</p>
                        <p>Events: Beach Wedding, Beach Party, Volleyball Tournament, Movie Night, Music Festival, Fitness Classes, Food and Drink festival</p>
                    </div>
                    <div className={`beach-details__tab-content ${activeTab === 'Weather' ? 'active' : ''}`}>
                        Weather
                    </div>
                    <div className={`beach-details__tab-content ${activeTab === 'Premium' ? 'active' : ''}`}>
                        Rewievs
                    </div>
                </div>
            </div >
        </div >
    );
};

export default BeachDetails;
