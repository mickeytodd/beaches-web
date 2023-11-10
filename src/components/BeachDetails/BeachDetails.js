import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BeachDetails.css';
import star from '../../assets/images/star.png';
import jellyfish from '../../assets/images/icons8-jellyfish-66.png';
import ProgressBar from './ProgressBar';


const BeachDetails = ({ data }) => {
    const [activeTab, setActiveTab] = useState('Regular');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const { id } = useParams();

    const beachDetails = data.find(beach => beach.id === id);

    if (!beachDetails) {
        return <div>Beach details not found</div>
    }


    return (
        <div>
            <div>
                <h1 className='beachTitle'>{beachDetails.title}</h1>
                <div className='rating'>
                    <img className='starIcon' src={star} alt="star icon" />
                    <p>4.6 (150 rates)</p>
                </div>
            </div>

            <div className="tabsWrapper">
                <ul className="tabs">
                    <li
                        className={activeTab === 'Regular' ? 'active' : ''}
                        onClick={() => handleTabClick('Regular')}
                    >
                        Features
                    </li>
                    <li
                        className={activeTab === 'Plus' ? 'active' : ''}
                        onClick={() => handleTabClick('Plus')}
                    >
                        Images
                    </li>
                    <li
                        className={activeTab === 'Premium' ? 'active' : ''}
                        onClick={() => handleTabClick('Premium')}
                    >
                        Comments
                    </li>
                </ul>
                <div className="containerTabs">
                    <div className={`content ${activeTab === 'Regular' ? 'active' : ''}`}>
                        <div className='featureBox'>
                            <div className='featureIcon'>
                                <img src={jellyfish} alt="jellyfish icon" />
                            </div>
                            <div className='featureBar'>
                                <ProgressBar title="No Jellyfish" percentage={50} />
                                <ProgressBar title="Few Jellyfish" percentage={75} />
                                <ProgressBar title="Lots Of Jellyfish" percentage={30} />
                            </div>
                        </div>

                    </div>
                    <div className={`content ${activeTab === 'Plus' ? 'active' : ''}`}>
                        Images
                    </div>
                    <div className={`content ${activeTab === 'Premium' ? 'active' : ''}`}>
                        Comments
                    </div>
                </div>
            </div>


        </div >



    );
}


export default BeachDetails;