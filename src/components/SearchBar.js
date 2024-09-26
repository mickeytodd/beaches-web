import React from 'react';
import './SearchBar.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import FilterOptions from './FilterOptions';

const SearchBar = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBeaches, setFilteredBeaches] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedBeach, setSelectedBeach] = useState('');
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const newInputValue = event.target.value.trim();
        setSearchTerm(newInputValue);

        const filtered = data.filter(beach =>
            beach.title.toLowerCase().includes(newInputValue.toLowerCase()) ||
            beach.location.toLowerCase().includes(newInputValue.toLowerCase())
        );
        setFilteredBeaches(filtered);
        setInputValue(newInputValue);
        setIsDropdownOpen(newInputValue !== '' && filtered.length > 0);
        setSelectedIndex(-1);
    };


    const handleInputBlur = () => {
        setTimeout(() => {
            setIsDropdownOpen(false);
        }, 100);
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


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (selectedIndex >= 0 && selectedIndex < filteredBeaches.length) {
                const selectedBeach = filteredBeaches[selectedIndex];
                navigate(`/beach-details/${selectedBeach.id}`);
            } else {
                const trimmedSearchTerm = searchTerm.trim().toLowerCase();

                const locationMatch = data.find(beach => {
                    const locationWords = beach.location.toLowerCase().split(/[\s,]+/);
                    return locationWords.includes(trimmedSearchTerm);
                });

                if (locationMatch) {
                    navigate(`/location/${trimmedSearchTerm}`);
                } else {
                    navigate(`/location/${trimmedSearchTerm}`);
                    console.log('No matching location found.');
                }
            }

        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setSelectedIndex(prevIndex =>
                prevIndex < filteredBeaches.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        }
    };


    const handleFilterButtonClick = () => {
        setIsFilterMenuOpen(!isFilterMenuOpen);
    };

    const handleFilterChange = (filter) => {
        console.log('Selected filter:', filter);
    };

    return (
        <div className='header-wrapper'>
            <h1 className='header-title'>Find your perfect beach</h1>
            <div className={`search-bar-wrapper ${isDropdownOpen ? 'search-bar-wrapper-open' : 'search-bar-wrapper-closed'}`}>
                <div className="search-bar">
                    <div className='search-bar__magnifying-glass'>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-input"
                        id='searchInput'
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                    />
                    {isDropdownOpen && (
                        <div className='dropdown-container' id='dropdown-container'>
                            <ul className='search-results'>
                                {filteredBeaches.map((beach, index) => (
                                    <li
                                        key={beach.id}
                                        className={index === selectedIndex ? 'selected' : ''}
                                        onClick={() => navigate(`/beach-details/${beach.id}`)}
                                    >
                                        <Link
                                            to={`/beach-details/${beach.id}`}
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            {beach.title}
                                            <p className='search-bar__location'>{beach.location}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <button className='filter-button' onClick={handleFilterButtonClick}>
                Filters
            </button>
            {isFilterMenuOpen && (
                <FilterOptions
                    onFilterChange={handleFilterChange}
                    filters={['Location', 'Rating', 'Type']}
                />
            )}
        </div >
    );
};


export default SearchBar;