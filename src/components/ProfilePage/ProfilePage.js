import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import { FaEdit, FaMapMarkerAlt, FaStar, FaHeart } from "react-icons/fa";
import "./ProfilePage.css";
import userImg from '../../assets/images/male-user.png';

const ProfilePage = ({ data }) => {
    const [user, setUser] = useState({
        name: "John Doe",
        bio: "Beach lover & explorer 🌊🏝️",
        location: "Los Angeles, CA",
        profilePicture: userImg,
        ratedBeachIds: ["b1", "b2", "b3"],
        favoriteBeachIds: ["b4", "b2", "b7"],
        achievements: ["Top Reviewer", "Explorer"],
    });

    const ratedBeaches = data.filter(beach => user.ratedBeachIds.includes(beach.id));
    const favoriteBeaches = data.filter(beach => user.favoriteBeachIds.includes(beach.id));

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <div className="profile-header">
                    <img src={user.profilePicture} alt="Profile" className="profile-pic" />
                    <h2 className="profile-name">{user.name}</h2>
                    <p className="profile-location">
                        <FaMapMarkerAlt className="location-icon" /> {user.location}
                    </p>
                    <p className="profile-bio">{user.bio}</p>
                    <button className="edit-btn">
                        <FaEdit /> Edit Profile
                    </button>
                </div>

                {/* Beach Activity */}
                <div className="profile-activity">
                    <h3 className="section-title">Beach Activity</h3>
                    <div className="activity-grid">

                        {/* Rated Beaches */}
                        <div className="activity-card">
                            <h4 className="activity-title">
                                <FaStar className="star-icon" /> Rated Beaches
                            </h4>
                            <ul className="activity-list">
                                {ratedBeaches.map(beach => (
                                    <li key={beach.id}>
                                        <Link to={`/beach-details/${beach.id}`} className="beach-link">
                                            {beach.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Favorite Beaches */}
                        <div className="activity-card">
                            <h4 className="activity-title">
                                <FaHeart className="heart-icon" /> Favorite Beaches
                            </h4>
                            <ul className="activity-list">
                                {favoriteBeaches.map(beach => (
                                    <li key={beach.id}>
                                        <Link to={`/beach-details/${beach.id}`} className="beach-link">
                                            {beach.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="profile-achievements">
                    <h3 className="section-title">Achievements</h3>
                    <div className="achievements-list">
                        {user.achievements.map((achievement, index) => (
                            <span key={index} className="achievement-badge">
                                {achievement}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
