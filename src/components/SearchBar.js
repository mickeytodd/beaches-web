import React from 'react';
import './SearchBar.css';
import { useState } from 'react';

const SearchBar = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBeaches, setFilteredBeaches] = useState([]);

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);


        const filtered = data.filter(beach =>
            beach.title.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
        setFilteredBeaches(filtered);
    };

    const handleBeachSelect = (beach) => {

        console.log('Selected beach:', beach);
    };




    return (
        <div className='header-wrapper'>
            <h1 className='header-title'>Lorem ipsum dolor sit amet</h1>
            <h2>Lorem ipsum dolor sit</h2>
            <p className='header-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum doloribus saepe explicabo quibusdam culpa quam</p>

            <div className='search-bar-wrapper'>
                <div className="search-bar">
                    🌴
                    <input
                        type="text"
                        placeholder="Find a beach..."
                        onChange={handleSearchChange}
                        className="text-input"
                    />
                    <button className="search-button">Search</button>
                </div>
                <div>
                    <ul className='search-results'>
                        {filteredBeaches.map(beach => (
                            <li
                                key={beach.id}
                                onClick={() => handleBeachSelect(beach)}
                            >
                                {beach.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet</p>

        </div>
    );
};


export default SearchBar;