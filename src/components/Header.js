import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ data }) => {
    return (
        <header className='beachHeader'>
            <Navbar />
            <SearchBar data={data} />
        </header>
    );
};

export default Header;