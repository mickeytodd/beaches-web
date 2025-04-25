import React, { useState, useEffect } from 'react';
import './Navbar.css';
import UserAvatar from './UserAvatar';
import Login from './Login/Login';
import { FaHome, FaUser, FaHeart } from 'react-icons/fa';
import fakeUserImg from '../assets/images/fakeuser.jpg';

const Navbar = () => {
    const fakeUser = {
        name: "Fake User",
        imgUrl: fakeUserImg,
    };

    const [user, setUser] = useState(fakeUser);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = (e) => {
        if (e.target.classList.contains("login-btn")) {
            return;
        }
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        setUser(null);
        setIsDropdownOpen(false);
    };

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
                        <UserAvatar imageUrl={user ? user.imgUrl : null} />
                    </div>
                    {!isMobile && !user && (
                        <button
                            className="login-btn"
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Log in
                        </button>
                    )}
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

                        {user && (
                            <div className="mobile__logout">
                                <button
                                    className="mobile__logout-btn"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            </div>
                        )}

                        {!user && (
                            <div className="mobile__login">
                                <button
                                    className="mobile__login-btn"
                                    onClick={() => {
                                        setIsLoginOpen(true);
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    Log in
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="mobile__backdrop" onClick={toggleDropdown}></div>
                </div>
            )}

            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Navbar;
