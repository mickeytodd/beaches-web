import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Card from '../UI/Card';
import './RatedBeaches.css';

function RatedBeaches({ data }) {
    const navigate = useNavigate();

    // Select top 10 beaches for each category
    const topBeaches = [...data].sort((a, b) => b.rating - a.rating).slice(0, 10);
    const recentlyRated = [...data].slice(0, 10);

    const handleCardClick = (beachId) => {
        navigate(`/beach-details/${beachId}`);
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='rated-beaches-wrapper'>
            <div className='rated-beaches-section'>
                <h2 className='rated-beaches__title'>Recently Rated Beaches</h2>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {recentlyRated.map(beach => (
                            <div key={beach.id} onClick={() => handleCardClick(beach.id)} className="carousel__card">
                                <Card beach={beach} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='rated-beaches-section'>
                <h2 className='rated-beaches__title'>Top Beaches</h2>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {topBeaches.map(beach => (
                            <div key={beach.id} onClick={() => handleCardClick(beach.id)} className="carousel__card">
                                <Card beach={beach} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default RatedBeaches;
