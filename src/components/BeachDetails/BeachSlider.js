// ImageSlider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BeachSlider.css';

const BeachSlider = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    'https://api.unsplash.com/search/photos?query=beach&per_page=10&client_id=atTPMIBU_EHo80UqCMOUMLp65OXTY01Bpej1BwGBtXI'
                );

                setImages(response.data.results);
            } catch (error) {
                console.error('Error fetching images from Unsplash:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);


    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };


    return (
        <div className="image-slider-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="top-image">
                        {images.length > 0 && (
                            <img src={images[currentIndex].urls.regular} alt={images[0].alt_description || 'Image'} />
                        )}
                        <div className="nav-buttons">
                            <button onClick={handlePrevClick}>Previous</button>
                            <button onClick={handleNextClick}>Next</button>
                        </div>
                    </div>
                    <div className="image-row">
                        {images.slice(1, 4).map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BeachSlider;
