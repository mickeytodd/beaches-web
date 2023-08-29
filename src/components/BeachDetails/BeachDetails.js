import React from 'react';
import { useParams } from 'react-router-dom';
import './BeachDetails.css';

const BeachDetails = ({ data }) => {
    const { id } = useParams();

    const beachDetails = data.find(beach => beach.id === id);

    if (!beachDetails) {
        return <div>Beach details not found</div>
    }


    return (
        <div>
            <h1 className='nesto'>{beachDetails.title}</h1>
            <h2 className='nesto'>{beachDetails.amount}</h2>
            <h3 className='nesto'>{beachDetails.id}</h3>
        </div>
    );
}


export default BeachDetails;