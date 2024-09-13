import React, { useState } from "react";
import './FilterOptions.css';

const FilterOptions = ({ onFilterChange, filters }) => {
    const [slectedFilter, setSelectedFilter] = useState('');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="filter-options">
            <h3>Filter Options</h3>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={slectedFilter === filter ? 'active' : ''}
                    onClick={() => handleFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterOptions;