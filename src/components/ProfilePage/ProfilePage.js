import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import { FaEdit, FaMapMarkerAlt, FaStar, FaHeart } from "react-icons/fa";
import "./ProfilePage.css";
import userImg from '../../assets/images/male-user.png';
import photoHawaii from '../../assets/images/photo-hawaii.avif';
import photoMaldives from '../../assets/images/photo-maldives.avif';
import photoBalos from '../../assets/images/photo-balos.avif';
import photoElafonissi from '../../assets/images/photo-elafonissi.avif';
import photoMaya from '../../assets/images/photo-maya.avif';
import photoNavagio from '../../assets/images/photo-navagio.avif';
import photoThailand from '../../assets/images/photo-thailand.avif';

const ProfilePage = ({ data }) => {
    const [activeTab, setActiveTab] = useState('photos');
    const [user, setUser] = useState({
        name: "John Doe",
        bio: "Beach lover & explorer 🌊🏝️",
        location: "Los Angeles, CA",
        profilePicture: userImg,
        ratedBeachIds: ["b1", "b2", "b3"],
        favoriteBeachIds: ["b4", "b2", "b7"],
        wishlistBeachIds: ["b5", "b8"],
        reviews: [
            { id: "b1", text: "Amazing sunset views!" },
            { id: "b3", text: "Crystal clear waters, perfect for swimming." }
        ],
        uploadedPhotos: [
            { id: 1, src: photoHawaii, location: "Hawaii", uploadDate: "2025-03-30" },
            { id: 2, src: photoMaldives, location: "Maldives", uploadDate: "2025-03-28" },
            { id: 3, src: photoBalos, location: "Balos Beach", uploadDate: "2025-03-22" },
            { id: 4, src: photoElafonissi, location: "Elafonissi Beach, Crete", uploadDate: "2025-03-20" },
            { id: 5, src: photoMaya, location: "Maya Bay, Thailand", uploadDate: "2025-03-15" },
            { id: 6, src: photoNavagio, location: "Navagio, Zakynthos", uploadDate: "2025-03-12" },
            { id: 7, src: photoThailand, location: "Thailand", uploadDate: "2025-03-10" }
        ],
        achievements: ["Top Reviewer", "Explorer"]
    });

    const ratedBeaches = data.filter(beach => user.ratedBeachIds.includes(beach.id));
    const favoriteBeaches = data.filter(beach => user.favoriteBeachIds.includes(beach.id));
    const wishlistBeaches = data.filter(beach => user.wishlistBeachIds.includes(beach.id));

    const [modalVisible, setModalVisible] = useState(false);

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);

    const handlePhotoClick = (photoIndex) => {
        if (photoIndex !== null) {
            setCurrentPhotoIndex(photoIndex);
            setModalVisible(true);
        }
    };

    const handleNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % user.uploadedPhotos.length);
    };

    const handlePrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) =>
            prevIndex === 0 ? user.uploadedPhotos.length - 1 : prevIndex - 1
        );
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") handleNextPhoto();
            if (event.key === "ArrowLeft") handlePrevPhoto();
            if (event.key === "Escape") handleCloseModal();
        };

        if (modalVisible) {
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [modalVisible]);

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


                <div className="tabs">
                    <div className={`tab ${activeTab === 'photos' ? 'active' : ''}`} onClick={() => setActiveTab('photos')}>Photos</div>
                    <div className={`tab ${activeTab === 'rated' ? 'active' : ''}`} onClick={() => setActiveTab('rated')}>Rated Beaches</div>
                    <div className={`tab ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}>Beach Wishlist</div>
                </div>


                <div className="tab-content">
                    {activeTab === 'photos' && (
                        <div className="photos-section">
                            <h3 className="section-title">Uploaded Photos</h3>
                            <div className="photos-grid">
                                {user.uploadedPhotos.map((photo, index) => (
                                    <div key={photo.id} className="photo-item" onClick={() => handlePhotoClick(index)}>
                                        <div className="photo-location">{photo.location}</div>
                                        <img src={photo.src} alt="Beach" className="uploaded-photo" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={`photo-modal ${modalVisible ? "show" : ""}`} onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-btn" onClick={handleCloseModal}>&times;</span>

                            <div className="photo-container">
                                <button className="prev-btn" onClick={handlePrevPhoto}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <img src={user.uploadedPhotos[currentPhotoIndex]?.src} alt="Beach" className="modal-photo" />

                                <button className="next-btn" onClick={handleNextPhoto}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <p className="modal-location">{user.uploadedPhotos[currentPhotoIndex]?.location}</p>
                            <p className="modal-date">Uploaded on: {user.uploadedPhotos[currentPhotoIndex]?.uploadDate}</p>
                        </div>
                    </div>


                    {activeTab === 'rated' && (
                        <div className="rated-beaches-section">
                            <h3 className="section-title">Rated Beaches & Reviews</h3>
                            <div className="beach-list">
                                {ratedBeaches.map(beach => (
                                    <div key={beach.id} className="beach-item">
                                        <Link to={`/beach-details/${beach.id}`} className="beach-link">
                                            <h4>{beach.title}</h4>
                                        </Link>
                                        <div className="review-text">
                                            {user.reviews.find(review => review.id === beach.id)?.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'wishlist' && (
                        <div className="wishlist-section">
                            <h3 className="section-title">Beach Wishlist</h3>
                            <div className="wishlist-list">
                                {wishlistBeaches.map(beach => (
                                    <div key={beach.id} className="beach-item">
                                        <Link to={`/beach-details/${beach.id}`} className="beach-link">
                                            <h4>{beach.title}</h4>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default ProfilePage;
