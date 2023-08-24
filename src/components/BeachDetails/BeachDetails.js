import React from 'react';
import { useParams } from 'react-router-dom';
import './BeachDetails.css';

const BeachDetails = ({ data }) => {
    const { id } = useParams();

    const titleToShow = data.title || "Title Not Available";
    const amountToShow = data.amount || "Amount Not Available";
    console.log(titleToShow);
    console.log(amountToShow);

    return (
        <div>
            <h1 className='btitle'>{titleToShow}</h1>
            <h2 className='bamount'>{amountToShow}</h2>
            <h2>Nesto</h2>
        </div>
    );
}


export default BeachDetails;