import React, { useState } from 'react';
import './Navbar.css';
import UserAvatar from './UserAvatar';
import userIcon from '../assets/images/user.png';
import Login from './Login/Login';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <div className='navbar__container'>
            <nav className='navbar'>
                <div className="navbar__logo">
                    <a href="/">BeachFinder</a>
                </div>
                <div className='navbar__links'>
                    <ul className="navbar__menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/profile">My Profile</a></li>
                        <li><a href="#favorites">Favorites</a></li>
                        <li><button className="login-btn" onClick={() => setIsLoginOpen(true)}>Log in</button></li>
                    </ul>
                    <div className="navbar__hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <UserAvatar imageUrl={userIcon} />
                    </div>
                </div>
            </nav>
            <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </div>
    );
};

export default Navbar;