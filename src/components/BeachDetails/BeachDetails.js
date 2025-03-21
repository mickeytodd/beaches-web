import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BeachDetails.css';
import star from '../../assets/images/star.png';
import Navbar from '../Navbar';

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
        <div className='beach-details'>
            <Navbar />
            <div className="beach-details__header">
                <div className="beach-details__image-container">
                    <img className="beach-details__image" src={beachDetails.image} alt={`${beachDetails.title}`} />
                </div>
                <div className="beach-details__title-container">
                    <h1 className="beach-details__beach-name">{beachDetails.title}</h1>
                    <p className='beach-details__beach-location'>{beachDetails.location}</p>
                    <div className="beach-details__rating-container">
                        <img className="beach-details__star-icon" src={star} alt="star icon" />
                        <p className="beach-details__rating-text">{beachDetails.review} (150 rates)</p>
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
                        className={`beach-details__tab ${activeTab === 'Reviews' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Reviews')}
                    >
                        Reviews
                    </li>
                </ul>
                <div className="beach-details__tab-container">
                    <div className={`beach-details__tab-content ${activeTab === 'Features' ? 'active' : ''}`}>
                        <div className="beach-details__section">
                            <h3 className="beach-details__section-title">Type:</h3>
                            <p className="beach-details__section-content">{beachDetails.type}</p>
                        </div>
                        <div className="beach-details__section">
                            <h3 className="beach-details__section-title">Activities:</h3>
                            <p className="beach-details__section-content">{beachDetails.activities}</p>
                        </div>
                        <div className="beach-details__section">
                            <h3 className="beach-details__section-title">Facilities:</h3>
                            <p className="beach-details__section-content">{beachDetails.facilities}</p>
                        </div>
                        <div className="beach-details__section">
                            <h3 className="beach-details__section-title">Accessibility:</h3>
                            <p className="beach-details__section-content">{beachDetails.accessibilities}</p>
                        </div>
                        <div className="beach-details__section">
                            <h3 className="beach-details__section-title">Restaurants:</h3>
                            <p className="beach-details__section-content">{beachDetails.restaurants}</p>
                        </div>
                    </div>
                    <div className={`beach-details__tab-content ${activeTab === 'Weather' ? 'active' : ''}`}>
                        Weather
                    </div>
                    <div className={`beach-details__tab-content ${activeTab === 'Reviews' ? 'active' : ''}`}>
                        Reviews
                    </div>
                </div>
            </div >
        </div >
    );
};

export default BeachDetails;
