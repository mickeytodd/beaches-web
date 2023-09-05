import React from 'react';
import { useParams } from 'react-router-dom';
import './BeachDetails.css';
import StarRating from './StarRating';

const BeachDetails = ({ data }) => {
    const { id } = useParams();

    const beachDetails = data.find(beach => beach.id === id);

    if (!beachDetails) {
        return <div>Beach details not found</div>
    }


    return (
        <div>
            <div className='beachDetailsHeader'>
                <h1 className='beachTitle'>{beachDetails.title}</h1>
                <div>
                    <h1>Rate this product</h1>
                    <StarRating totalStars={5} initialRating={3} />
                </div>
                <img className='beachDetailsImg' src={beachDetails.image} alt="" />
            </div>
        </div>
    );
}


export default BeachDetails;