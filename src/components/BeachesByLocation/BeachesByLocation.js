import { useParams } from 'react-router-dom';
import './BeachesByLocation.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import star from '../../assets/images/star.png';
import BeachFilter from './BeachFilter';
import Navbar from '../Navbar';


const BeachesByLocation = ({ data }) => {
    const { location } = useParams();
    const navigate = useNavigate();
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedAccessibilities, setSelectedAccessibilities] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);

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
        const hasSelectedRestaurants = selectedRestaurants.length === 0 || selectedRestaurants.every(food => beach.restaurants.split(', ').includes(food));

        return hasSelectedTypes && hasSelectedActivities && hasSelectedFacilities && hasSelectedAccessibilities && hasSelectedRestaurants;

    });


    const capitalizeLocation = (location) => {
        return location
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const handleFilterChange = (types, activities, facilities, accessibilities, restaurants) => {
        setSelectedTypes(types);
        setSelectedActivities(activities);
        setSelectedFacilities(facilities);
        setSelectedAccessibilities(accessibilities);
        setSelectedRestaurants(restaurants);
    };

    const handleBeachClick = (beachId) => {
        navigate(`/beach-details/${beachId}`);
    }

    return (
        <div>
            <Navbar />
            <div className='beaches-location'>
                <div className='filters-wrapper'>
                    <h3 className='filter-title'>Filters</h3>
                    <div>
                        <BeachFilter
                            types={["Sandy Beach", "Pebble Beach", "Rocky Beach"]}
                            activities={["Swimming", "Surfing", "Snorkeling", "Scuba Diving", "Kayaking", "Paddleboarding", "Jet Skiing", "Windsurfing", "Fishing",
                                "Boat Tours", "Beach Volleyball", "Picnicking", "Camping"
                            ]}
                            facilities={["Restroom", "Shower", "Changing Room", "Lifeguard", "First Aid Station"]}
                            accessibilities={["Wheelchair Accessibility", "Accessible Parking", "Boardwalks or Ramps to the Beach"]}
                            restaurants={["Beachfront Restaurants or Cafés", "Snack Stands or Food Trucks", "Ice Cream Stands"]}
                            onFilter={handleFilterChange}
                        />
                    </div>
                </div>
                <div className='beaches-location-wrapper'>
                    <h1 className='beaches-location__title'>Beaches in {capitalizeLocation(location)}</h1>
                    <ul className="beaches-location__list">
                        {filteredBeachesByType.length > 0 ? (
                            filteredBeachesByType.map(beach => (
                                <li className="beaches-location__item" key={beach.id} onClick={() => handleBeachClick(beach.id)}>
                                    <Link className='beaches-location__link' to={`/beach-details/${beach.id}`} onClick={(e) => e.preventDefault()}>
                                        <div className='beach-item'>
                                            <div className='beach-item__image-container'>
                                                <img className='beach-item__image' src={beach.image} alt={beach.title} />
                                            </div>
                                            <div className='beach-item__info'>
                                                <h2 className='beach-item__title'>{beach.title}</h2>
                                                <p className='beach-item__location'>{beach.location}</p>
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
            </div>
        </div>
    );
};

export default BeachesByLocation;