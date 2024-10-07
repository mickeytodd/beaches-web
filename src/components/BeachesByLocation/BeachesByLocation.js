import { useParams } from 'react-router-dom';
import './BeachesByLocation.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import star from '../../assets/images/star.png';
import BeachFilter from './BeachFilter';

const BeachesByLocation = ({ data }) => {
    const { location } = useParams();
    const navigate = useNavigate();
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedAccessibilities, setSelectedAccessibilities] = useState([]);

    const trimmedLocation = location.trim().toLowerCase();

    const filteredBeaches = data.filter(beach => {
        const locationWords = beach.location.toLowerCase().split(/[\s,]+/);
        return locationWords.includes(trimmedLocation);
    });

    const filteredBeachesByType = filteredBeaches.filter(beach => {
        const hasSelectedTypes = selectedTypes.length === 0 || selectedTypes.includes(beach.type);
        const hasSelectedActivities = selectedActivities.length === 0 || selectedActivities.every(activity => beach.activities.split(', ').includes(activity));
        const hasSelectedFacilities = selectedFacilities.length === 0 || selectedFacilities.every(facility => beach.facilities.split(', ').includes(facility));
        const hasSelectedAccessibilities = selectedAccessibilities.length === 0 || selectedAccessibilities.every(accessibility => beach.accessibilities.split(', ').includes(accessibility));

        return hasSelectedTypes && hasSelectedActivities && hasSelectedFacilities && hasSelectedAccessibilities;
    });


    const capitalizeLocation = (location) => {
        return location
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const handleFilterChange = (types, activities, facilities, accessibilities) => {
        setSelectedTypes(types);
        setSelectedActivities(activities);
        setSelectedFacilities(facilities);
        setSelectedAccessibilities(accessibilities)
    };

    const handleBeachClick = (beachId) => {
        navigate(`/beach-details/${beachId}`);
    }

    return (
        <div className='beaches-location'>
            <div>
                <h3>Filters</h3>
                <BeachFilter
                    types={["Sandy Beach", "Pebble Beach", "Rocky Beach"]}
                    activities={["Swimming", "Surfing", "Snorkeling", "Scuba Diving", "Kayaking", "Paddleboarding", "Jet Skiing", "Windsurfing", "Fishing",
                        "Boat Tours", "Beach Volleyball", "Picnicking", "Camping"
                    ]}
                    facilities={["Restroom", "Shower", "Changing Room", "Lifeguard", "First Aid Station"]}
                    accessibilities={["Wheelchair Accessibility", "Accessible Parking", "Boardwalks or Ramps to the Beach"]}
                    onFilter={handleFilterChange}
                />
            </div>
            <ul className="beaches-location__list">
                <h1 className='beaches-location__title'>Beaches in {capitalizeLocation(location)}</h1>
                {filteredBeachesByType.length > 0 ? (
                    filteredBeachesByType.map(beach => (
                        <li className="beaches-location__item" key={beach.id} onClick={() => handleBeachClick(beach.id)}>
                            <Link className='beaches-location__link' to={`/beach-details/${beach.id}`} onClick={(e) => e.preventDefault()}>
                                <div className='beach-card'>
                                    <div className='beach-card__image-container'>
                                        <img className='beach-card__image' src={beach.image} alt={beach.title} />
                                    </div>
                                    <div className='beach-card__info'>
                                        <h2 className='beach-card__title'>{beach.title}</h2>
                                        <p className='beach-card__location'>{beach.location}</p>
                                        <div className="beach-details__rating-container">
                                            <img className="beach-details__star-icon" src={star} alt="star icon" />
                                            <p className="beach-details__rating-text">{beach.rating} (150 rates)</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                ) : (
                    <p className="beaches-location__no-results">No beaches found in {location}.</p>
                )}
            </ul>
        </div>
    );
};

export default BeachesByLocation;