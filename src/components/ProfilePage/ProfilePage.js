import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import { FaEdit, FaMapMarkerAlt, FaStar, FaHeart } from "react-icons/fa";
import { FaClipboardList, FaComment, FaCameraRetro } from "react-icons/fa";
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

    // State for Modal
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedPhoto(null);
    };

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

                {/* Tabs */}
                <div className="tabs">
                    <div className={`tab ${activeTab === 'photos' ? 'active' : ''}`} onClick={() => setActiveTab('photos')}>Photos</div>
                    <div className={`tab ${activeTab === 'rated' ? 'active' : ''}`} onClick={() => setActiveTab('rated')}>Rated Beaches</div>
                    <div className={`tab ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}>Beach Wishlist</div>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {activeTab === 'photos' && (
                        <div className="photos-section">
                            <h3 className="section-title">Uploaded Photos</h3>
                            <div className="photos-grid">
                                {user.uploadedPhotos.map(photo => (
                                    <div key={photo.id} className="photo-item" onClick={() => handlePhotoClick(photo)}>
                                        <div className="photo-location">{photo.location}</div>
                                        <img src={photo.src} alt="Beach" className="uploaded-photo" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Modal */}
                    {selectedPhoto && (
                        <div className={`photo-modal ${selectedPhoto ? 'show' : ''}`} onClick={() => setSelectedPhoto(null)}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <span className="close-btn" onClick={() => setSelectedPhoto(null)}>&times;</span>
                                <img src={selectedPhoto.src} alt="Beach" className="modal-photo" />
                                <p className="modal-location">{selectedPhoto.location}</p>
                                <p className="modal-date">Uploaded on: {selectedPhoto.uploadedAt}</p>
                            </div>
                        </div>
                    )}
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
        </div>
    );
};

export default ProfilePage;
