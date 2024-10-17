import React from 'react';
import './Navbar.css';
import UserAvatar from './UserAvatar';
import userIcon from '../assets/images/user.png';


const Navbar = () => {

    return (
        <nav className='navbar'>
            <div class="navbar__logo">
                <a href="/">BeachFinder</a>
            </div>
            <div className='navbar__links'>
                <ul className="navbar__menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#beaches">Beaches</a></li>
                    <li><a href="#activities">Activities</a></li>
                    <li><a href="#contact">Contact</a></li>
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
    );
};

export default Navbar;