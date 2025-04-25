import React, { useState } from 'react';
import './Navbar.css';
import UserAvatar from './UserAvatar';
import userIcon from '../assets/images/user.png';
import Login from './Login/Login';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        if (e.target.classList.contains("login-btn")) {
            return;
        }
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='navbar__container'>
            <nav className='navbar'>
                <div className="navbar__logo">
                    <a href="/">BeachFinder</a>
                </div>
                <div className="navbar__menu">
                    <ul className='navbar__list'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/profile">My Profile</a></li>
                        <li><a href="#favorites">Favorites</a></li>
                    </ul>
                </div>
                <div className="navbar__right">
                    <div className="navbar__avatar" onClick={toggleDropdown}>
                        <UserAvatar imageUrl={userIcon} />
                    </div>
                    {isDropdownOpen && (
                        <ul className="navbar__dropdown">
                            <li><a href="/">Home</a></li>
                            <li><a href="/profile">My Profile</a></li>
                            <li><a href="#favorites">Favorites</a></li>
                        </ul>
                    )}
                    <button
                        className="login-btn"
                        onClick={() => setIsLoginOpen(true)}
                    >
                        Log in
                    </button>
                </div>
            </nav>

            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Navbar;
