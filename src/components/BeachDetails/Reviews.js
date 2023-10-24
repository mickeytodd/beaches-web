import React, { useState } from 'react';
import './Reviews.css';
import 'font-awesome/css/font-awesome.min.css';

const reviews = [
    {
        id: 1,
        author: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 2,
        author: 'Jane Smith',
        text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        author: 'Alice Johnson',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        id: 4,
        author: 'Josh Burr',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        id: 5,
        author: 'Bill Simpson',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },

];

const extendedReviews = [...reviews, ...reviews, ...reviews];

const numReviewsToShow = 3;

const Reviews = () => {
    const [startIndex, setStartIndex] = useState(0);

    const nextReview = () => {
        setStartIndex((prevStartIndex) =>
            (prevStartIndex + 1) % (extendedReviews.length - numReviewsToShow + 1)
        );
    };

    const previousReview = () => {
        setStartIndex((prevStartIndex) =>
            (prevStartIndex - 1 + extendedReviews.length) % (extendedReviews.length - numReviewsToShow + 1)
        );
    };


    const displayedReviews = extendedReviews.slice(
        startIndex,
        startIndex + numReviewsToShow
    );

    return (
        <div className="review-slider">
            <i className="fa fa-chevron-left prev-button" onClick={previousReview}></i>
            <div className="review-card-container">
                {displayedReviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <p className="review-text">{review.text}</p>
                        <p className="review-author">{`- ${review.author}`}</p>
                    </div>
                ))}
            </div>
            <i className="fa fa-chevron-right next-button" onClick={nextReview}></i>
        </div>
    );
};

export default Reviews;