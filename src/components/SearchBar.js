import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const handleSearch = (event) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
        <div className='header-wrapper'>
            <h1 className='header-title'>Lorem ipsum dolor sit amet</h1>
            <h2>Lorem ipsum dolor sit</h2>
            <p className='header-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum doloribus saepe explicabo quibusdam culpa quam</p>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="🌴 Find a beach..."
                    onChange={handleSearch}
                    className="text-input"
                />
                <button className="search-button">Search</button>
            </div>
            <p>Lorem ipsum dolor sit amet</p>

        </div>
    );
};

export default SearchBar;