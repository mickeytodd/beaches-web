import React from "react";
import './UserAvatar.css';

const UserAvatar = ({ imageUrl }) => {

    return (
        <div className="user-avatar">
            <img src={imageUrl} alt="User Avatar" className="avatar-img" />
        </div>
    );
};

export default UserAvatar;