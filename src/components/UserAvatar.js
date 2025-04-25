import React from "react";
import './UserAvatar.css';
import defaultAvatar from '../assets/images/user.png';

const UserAvatar = ({ imageUrl }) => {

    const avatarToShow = imageUrl || defaultAvatar;

    return (
        <div className="user-avatar">
            <img src={avatarToShow} alt="User Avatar" className="avatar-img" />
        </div>
    );
};

export default UserAvatar;
