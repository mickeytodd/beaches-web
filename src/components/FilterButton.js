import React, { useState } from 'react';

const FilterButton = ({ filters, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleFilterChange = (filterName, value) => {
        const updatedFilters = {
            ...selectedFilters,
            [filterName]: value,
        };
        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    return (
        <div className="filter-button">
            <button onClick={toggleDropdown}>
                Filter Options
            </button>
            {isOpen && (
                <div className="dropdown">
                    {filters.map((filter, index) => (
                        <div key={index} className="filter-option">
                            <label>{filter.label}</label>
                            <select
                                onChange={(e) =>
                                    handleFilterChange(filter.name, e.target.value)
                                }
                            >
                                <option value="">Select {filter.label}</option>
                                {filter.options.map((option, i) => (
                                    <option key={i} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterButton;
