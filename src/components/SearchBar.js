import React from 'react';
import './SearchBar.css';
import { useState, useEffect } from 'react';

const SearchBar = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBeaches, setFilteredBeaches] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleInputChange = (event) => {
        const newInputValue = event.target.value.trim();
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        const filtered = data.filter(beach =>
            beach.title.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
        setFilteredBeaches(filtered);
        setInputValue(newInputValue);
        setIsDropdownOpen(newInputValue !== '');
        setSelectedIndex(-1);
    };

    const handleInputBlur = () => {
        setIsDropdownOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (!event.target.closest('.search-bar-wrapper')) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleBeachSelect = (beach) => {
        console.log('Selected beach:', beach);
        setIsDropdownOpen(false);
    };

    const handleKeyDown = (event) => {
        if (isDropdownOpen) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                setSelectedIndex(prevIndex =>
                    prevIndex < filteredBeaches.length - 1 ? prevIndex + 1 : prevIndex
                );
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
            } else if (event.key === 'Enter' && selectedIndex !== -1) {
                handleBeachSelect(filteredBeaches[selectedIndex]);
            }
        }
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
                        className="text-input"
                        id='searchInput'
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="search-button">Search</button>
                </div>

                {isDropdownOpen && (
                    <div className='dropdown-container' id='dropdown-container'>
                        <ul className='search-results'>
                            {filteredBeaches.map((beach, index) => (
                                <li
                                    key={beach.id}
                                    onClick={() => handleBeachSelect(beach)}
                                    className={index === selectedIndex ? 'selected' : ''}
                                >
                                    {beach.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <p>Lorem ipsum dolor sit amet</p>

        </div>
    );
};


export default SearchBar;