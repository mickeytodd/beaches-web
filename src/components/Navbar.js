import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='beachNav'>
            <div className="navLogo">Logo</div>
            <ul className="navLinks">
                <li className='navLink'>Link</li>
                <li className='navLink'>Link</li>
            </ul>
        </nav>
    );
};

export default Navbar;