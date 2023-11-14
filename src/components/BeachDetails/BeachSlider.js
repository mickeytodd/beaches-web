// ImageSlider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './BeachSlider.css';

const BeachSlider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    'https://api.unsplash.com/search/photos?query=beach&per_page=10&client_id=atTPMIBU_EHo80UqCMOUMLp65OXTY01Bpej1BwGBtXI'
                );

                setImages(response.data.results);
            } catch (error) {
                console.error('Error fetching images from Unsplash:', error);
            }
        };

        fetchImages();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div className="beach-slider-container">
            <div className="image-row">
                {Array.isArray(images) &&
                    images.map((image) => (
                        <div key={image.id} className="image-item">
                            <img src={image.urls.regular} alt={image.alt_description} />
                        </div>
                    ))}
            </div>
        </div>
    )
        ;
}

export default BeachSlider;
