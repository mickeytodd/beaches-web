import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ totalStars, initialRating, reviewCount }) => {
    const [rating, setRating] = useState(initialRating || 0);

    const handleStarClick = (clickedIndex) => {
        setRating(clickedIndex + 1);
    };

    return (
        <div className='starRatingBox'>
            <div>
                {[...Array(totalStars)].map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleStarClick(index)}
                        style={{
                            cursor: 'pointer',
                            color: index < rating ? 'gold' : 'gray',
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>
            <div className='rating'>
                <p className='ratingScore'>Rating: {rating} out of {totalStars}</p>
                <p className='reviewCount'> ({reviewCount})</p>
            </div>
        </div>
    );
};

export default StarRating;