import { useState } from 'react';
import './BeachFilter.css';

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
        <div className='filter-wrapper'>
            <div className='type-wrapper'>
                <h4 className='option-title'>
                    Type
                    <button className="toggle-button" onClick={() => toggleSection(isTypeOpen, setIsTypeOpen)}>
                        {isTypeOpen ? '-' : '+'}
                    </button>
                </h4>
                {isTypeOpen && (
                    <div className='filter-options'>
                        {types.map((type) => (
                            <div key={type}>
                                <input
                                    type="checkbox"
                                    id={type}
                                    value={type}
                                    onChange={() =>
                                        handleCheckboxChange(type, setSelectedTypes, selectedTypes)
                                    }
                                />
                                <label className='filter-option' htmlFor={type}>{type}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='activity-wrapper'>
                <h4 className='option-title'>
                    Activities
                    <button className="toggle-button" onClick={() => toggleSection(isActivityOpen, setIsActivityOpen)}>
                        {isActivityOpen ? '-' : '+'}
                    </button>
                </h4>
                {isActivityOpen && (
                    <div className='filter-options'>
                        {activities.map((activity) => (
                            <div key={activity}>
                                <input
                                    type="checkbox"
                                    id={activity}
                                    value={activity}
                                    onChange={() =>
                                        handleCheckboxChange(activity, setSelectedActivities, selectedActivities)
                                    }
                                />
                                <label className='filter-option' htmlFor={activity}>{activity}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='facility-wrapper'>
                <h4 className='option-title'>
                    Facilities
                    <button className="toggle-button" onClick={() => toggleSection(isFacilityOpen, setIsFacilityOpen)}>
                        {isFacilityOpen ? '-' : '+'}
                    </button>
                </h4>
                {isFacilityOpen && (
                    <div className='filter-options'>
                        {facilities.map((facility) => (
                            <div key={facility}>
                                <input
                                    type="checkbox"
                                    id={facility}
                                    value={facility}
                                    onChange={() =>
                                        handleCheckboxChange(facility, setSelectedFacilities, selectedFacilities)
                                    }
                                />
                                <label className='filter-option' htmlFor={facility}>{facility}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='accessibility-wrapper'>
                <h4 className='option-title'>
                    Accessibility Features
                    <button className="toggle-button" onClick={() => toggleSection(isAccessibilityOpen, setIsAccessibilityOpen)}>
                        {isAccessibilityOpen ? '-' : '+'}
                    </button>
                </h4>
                {isAccessibilityOpen && (
                    <div className='filter-options'>
                        {accessibilities.map((accessibility) => (
                            <div key={accessibility}>
                                <input
                                    type="checkbox"
                                    id={accessibility}
                                    value={accessibility}
                                    onChange={() =>
                                        handleCheckboxChange(accessibility, setSelectedAccessibilities, selectedAccessibilities)
                                    }
                                />
                                <label className='filter-option' htmlFor={accessibility}>{accessibility}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='food-wrapper'>
                <h4 className='option-title'>
                    Food and Drink
                    <button className="toggle-button" onClick={() => toggleSection(isFoodOpen, setIsFoodOpen)}>
                        {isFoodOpen ? '-' : '+'}
                    </button>
                </h4>
                {isFoodOpen && (
                    <div className='filter-options'>
                        {restaurants.map((food) => (
                            <div key={food}>
                                <input
                                    type="checkbox"
                                    id={food}
                                    value={food}
                                    onChange={() =>
                                        handleCheckboxChange(food, setSelectedRestaurants, selectedRestaurants)
                                    }
                                />
                                <label className='filter-option' htmlFor={food}>{food}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BeachFilter;