import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ onSearch }) => {
    return (
        <header className='beachHeader'>
            <Navbar />
            <SearchBar onSearch={onSearch} />
        </header>
    );
};

export default Header;