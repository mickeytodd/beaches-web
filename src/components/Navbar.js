import React from 'react';
import './Navbar.css';
import UserAvatar from './UserAvatar';
import userIcon from '../assets/images/user.png';


const Navbar = () => {

    return (
        <nav className='beachNav'>
            <div className="navLogo">Beaches</div>
            <div>
                <UserAvatar imageUrl={userIcon} />
            </div>
        </nav>
    );
};

export default Navbar;