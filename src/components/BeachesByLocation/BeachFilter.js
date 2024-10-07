import { useState } from 'react';
import './BeachFilter.css';

const BeachFilter = ({ types, activities, facilities, accessibilities, onFilter }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [selectedFacilities, setSelectedFacilities] = useState([]);
    const [selectedAccessibilities, setSelectedAccessibilities] = useState([]);

    const handleCheckboxChange = (value, setSelected, selectedItems) => {
        const updatedSelection = (selectedItems || []).includes(value)
            ? selectedItems.filter(item => item !== value)
            : [...(selectedItems || []), value];

        setSelected(updatedSelection);

        onFilter(
            setSelected === setSelectedTypes ? updatedSelection : selectedTypes,
            setSelected === setSelectedActivities ? updatedSelection : selectedActivities,
            setSelected === setSelectedFacilities ? updatedSelection : selectedFacilities,
            setSelected === setSelectedAccessibilities ? updatedSelection : selectedAccessibilities
        );
    };

    return (
        <div className='filter-wrapper'>
            <div className='type-wrapper'>
                <h4>Type</h4>
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
                        <label htmlFor={type}>{type}</label>
                    </div>
                ))}
            </div>

            <div className='activity-wrapper'>
                <h4>Activities</h4>
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
                        <label htmlFor={activity}>{activity}</label>
                    </div>
                ))}
            </div>

            <div className='facility-wrapper'>
                <h4>Facilities</h4>
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
                        <label htmlFor={facility}>{facility}</label>
                    </div>
                ))}
            </div>

            <div className='accessibility-wrapper'>
                <h4>Accessibility Features</h4>
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
                        <label htmlFor={accessibility}>{accessibility}</label>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BeachFilter;
