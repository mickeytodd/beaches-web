import { useState } from 'react';
import './BeachFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BeachFilter = ({ types, activities, facilities, accessibilities, restaurants, onFilter }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedAccessibilities, setSelectedAccessibilities] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);

    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isActivityOpen, setIsActivityOpen] = useState(false);
    const [isFacilityOpen, setIsFacilityOpen] = useState(false);
    const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
    const [isFoodOpen, setIsFoodOpen] = useState(false);

    const handleCheckboxChange = (value, setSelected, selectedItems) => {
        const updatedSelection = (selectedItems || []).includes(value)
            ? selectedItems.filter(item => item !== value)
            : [...(selectedItems || []), value];

        setSelected(updatedSelection);

        onFilter(
            setSelected === setSelectedTypes ? updatedSelection : selectedTypes,
            setSelected === setSelectedActivities ? updatedSelection : selectedActivities,
            setSelected === setSelectedFacilities ? updatedSelection : selectedFacilities,
            setSelected === setSelectedAccessibilities ? updatedSelection : selectedAccessibilities,
            setSelected === setSelectedRestaurants ? updatedSelection : selectedRestaurants
        );
    };

    const toggleSection = (sectionState, setSectionState) => {
        setSectionState(!sectionState);
    };

    return (
        <div className='beach-filter'>
            <div className='beach-filter__section'>
                <h4 className={`beach-filter__title ${isTypeOpen ? 'active' : ''}`}
                    onClick={() => toggleSection(isTypeOpen, setIsTypeOpen)}>
                    Type
                    <button className="beach-filter__toggle-button">
                        {isTypeOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </button>
                </h4>
                {isTypeOpen && (
                    <div className='beach-filter__options'>
                        {types.map((type) => (
                            <div className='beach-filter__option' key={type}>
                                <input
                                    type="checkbox"
                                    className='beach-filter__checkbox'
                                    id={type}
                                    value={type}
                                    onChange={() =>
                                        handleCheckboxChange(type, setSelectedTypes, selectedTypes)
                                    }
                                />
                                <label className='beach-filter__label' htmlFor={type}>{type}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div >

            <div className='beach-filter__section'>
                <h4 className='beach-filter__title'
                    onClick={() => toggleSection(isActivityOpen, setIsActivityOpen)}>
                    Activities
                    <button className="beach-filter__toggle-button">
                        {isActivityOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </button>
                </h4>
                {isActivityOpen && (
                    <div className='beach-filter__options'>
                        {activities.map((activity) => (
                            <div className='beach-filter__option' key={activity}>
                                <input
                                    type="checkbox"
                                    className='beach-filter__checkbox'
                                    id={activity}
                                    value={activity}
                                    onChange={() =>
                                        handleCheckboxChange(activity, setSelectedActivities, selectedActivities)
                                    }
                                />
                                <label className='beach-filter__label' htmlFor={activity}>{activity}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='beach-filter__section'>
                <h4 className='beach-filter__title'
                    onClick={() => toggleSection(isFacilityOpen, setIsFacilityOpen)}>
                    Facilities
                    <button className="beach-filter__toggle-button">
                        {isFacilityOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </button>
                </h4>
                {isFacilityOpen && (
                    <div className='beach-filter__options'>
                        {facilities.map((facility) => (
                            <div className='beach-filter__option' key={facility}>
                                <input
                                    type="checkbox"
                                    className='beach-filter__checkbox'
                                    id={facility}
                                    value={facility}
                                    onChange={() =>
                                        handleCheckboxChange(facility, setSelectedFacilities, selectedFacilities)
                                    }
                                />
                                <label className='beach-filter__label' htmlFor={facility}>{facility}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='beach-filter__section'>
                <h4 className='beach-filter__title'
                    onClick={() => toggleSection(isAccessibilityOpen, setIsAccessibilityOpen)}>
                    Accessibility Features
                    <button className="beach-filter__toggle-button">
                        {isAccessibilityOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </button>
                </h4>
                {isAccessibilityOpen && (
                    <div className='beach-filter__options'>
                        {accessibilities.map((accessibility) => (
                            <div className='beach-filter__option' key={accessibility}>
                                <input
                                    type="checkbox"
                                    className='beach-filter__checkbox'
                                    id={accessibility}
                                    value={accessibility}
                                    onChange={() =>
                                        handleCheckboxChange(accessibility, setSelectedAccessibilities, selectedAccessibilities)
                                    }
                                />
                                <label className='beach-filter__label' htmlFor={accessibility}>{accessibility}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='beach-filter__section'>
                <h4 className='beach-filter__title'
                    onClick={() => toggleSection(isFoodOpen, setIsFoodOpen)}>
                    Food and Drink
                    <button className="beach-filter__toggle-button">
                        {isFoodOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </button>
                </h4>
                {isFoodOpen && (
                    <div className='beach-filter__options'>
                        {restaurants.map((food) => (
                            <div className='beach-filter__option' key={food}>
                                <input
                                    type="checkbox"
                                    className='beach-filter__checkbox'
                                    id={food}
                                    value={food}
                                    onChange={() =>
                                        handleCheckboxChange(food, setSelectedRestaurants, selectedRestaurants)
                                    }
                                />
                                <label className='beach-filter__label' htmlFor={food}>{food}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    );
};

export default BeachFilter;
