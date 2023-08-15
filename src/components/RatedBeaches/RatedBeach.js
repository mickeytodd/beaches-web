import React, { useState } from 'react';
import Card from '../UI/Card';
import './RatedBeach.css';

const RatedBeach = (props) => {


    return (
        <Card className='rated-beach'>
            <div className='rated-beach__wrapper'>
                <img src={props.image} alt="beach image" className='rated-beach__image' />
                <h2 className='rated-beach__title'>{props.title}</h2>
                <div className='rated-beach__amount'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default RatedBeach; 