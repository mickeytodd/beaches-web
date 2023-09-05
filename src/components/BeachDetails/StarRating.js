import React, { useState } from 'react';

const StarRating = ({ totalStars, initialRating }) => {
    const [rating, setRating] = useState(initialRating || 0);

    const handleStarClick = (clickedIndex) => {
        setRating(clickedIndex + 1);
    };

    return (
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
            <p>Rating: {rating} out of {totalStars}</p>
        </div>
    );
};

export default StarRating;