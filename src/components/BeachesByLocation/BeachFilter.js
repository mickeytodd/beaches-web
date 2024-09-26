import { useState } from 'react';
import './BeachFilter.css';

const BeachFilter = ({ types, onFilter }) => {
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleCheckboxChange = (type) => {
        const updatedTypes = selectedTypes.includes(type)
            ? selectedTypes.filter((t) => t !== type)
            : [...selectedTypes, type];
        setSelectedTypes(updatedTypes);
        onFilter(updatedTypes);
    };

    return (
        <div className='type-wrapper'>
            {types.map((type) => (
                <div key={type}>
                    <input
                        type="checkbox"
                        id={type}
                        value={type}
                        onChange={() => handleCheckboxChange(type)}
                    />
                    <label htmlFor={type}>{type}</label>
                </div>
            ))}
        </div>
    );
};


export default BeachFilter;