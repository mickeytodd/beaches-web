import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Header.css';

const Header = ({ data }) => {
    return (
        <header className='beachHeaderWrapper'>
            <div className='beachHeader'>
                <Navbar />
                <SearchBar data={data} />
            </div>
        </header>
    );
};

export default Header;