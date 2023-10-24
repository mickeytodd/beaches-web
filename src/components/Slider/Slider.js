import React, { useState } from 'react';
import './Slider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="image-slider">
            <div className="image-container">
                <img className='currentImage' src={images[currentIndex]} alt={`Image ${currentIndex}`} />
                <div className="image-thumbnails">
                    <div className="arrow left-arrow" onClick={handlePrevClick}>
                        <FaArrowLeft />
                    </div>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            onClick={() => setCurrentIndex(index)}
                            className={index === currentIndex ? 'active' : ''}
                        />
                    ))}
                    <div className="arrow right-arrow" onClick={handleNextClick}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;