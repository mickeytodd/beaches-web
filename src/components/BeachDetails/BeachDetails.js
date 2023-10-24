import React from 'react';
import { useParams } from 'react-router-dom';
import './BeachDetails.css';
import StarRating from './StarRating';
import Slider from '../Slider/Slider';
import Reviews from './Reviews';
import Features from './Features';

const BeachDetails = ({ data }) => {
    const { id } = useParams();

    const beachDetails = data.find(beach => beach.id === id);

    if (!beachDetails) {
        return <div>Beach details not found</div>
    }

    const images = [
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1496134732667-ae8d2853a045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

    ];



    return (
        <div>
            <div className='beachDetailsHeader'>
                <div className='imgWithTitle'>
                    <Slider images={images} />
                    <h1 className='beachTitle'>{beachDetails.title}</h1>
                </div>
                <div className='beachDetailsTitle'>
                </div>
            </div>
            <div className='starRating'>
                <div className='sRating'>
                    <h1 className='rateTitle'>Rate this beach</h1>
                    <StarRating totalStars={5} initialRating={3} reviewCount={10} />
                </div>
                <Reviews />
            </div>
            <Features />
        </div>
    );
}


export default BeachDetails;