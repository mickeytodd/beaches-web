import React, { useState } from 'react';
import './Navbar.css';
import UserAvatar from './UserAvatar';
import userIcon from '../assets/images/user.png';
import Login from './Login/Login';
import { FaHome, FaUser, FaHeart } from 'react-icons/fa';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        if (e.target.classList.contains("login-btn")) {
            return;
        }
        setIsDropdownOpen(!isDropdownOpen);
    };

    const fakeUser = {
        name: "Fake User",
        imgUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    const user = fakeUser;

    return (
        <div className='navbar__container'>
            <nav className="navbar">
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
                    <button
                        className="login-btn"
                        onClick={() => setIsLoginOpen(true)}
                    >
                        Log in
                    </button>
                </div>
            </nav>
            {isDropdownOpen && (
                <div>
                    <div className="mobile__menu">
                        <button className="mobile__close" onClick={toggleDropdown}>✕</button>
                        {user && (
                            <div className="mobile__user">
                                <img src={user.imgUrl} alt="User" className="mobile__user-img" />
                                <div className="mobile__user-name">{user.name}</div>
                            </div>
                        )}
                        <ul className="mobile__list">
                            <li><a href="/"><FaHome className="nav-icon" />Home</a></li>
                            <li><a href="/profile"><FaUser className="nav-icon" />My Profile</a></li>
                            <li><a href="#favorites"><FaHeart className="nav-icon" />Favorites</a></li>
                        </ul>
                    </div>
                    <div className="mobile__backdrop" onClick={toggleDropdown}></div>
                </div>
            )}
            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Navbar;
