import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ title, percentage }) => {
    return (
        <div className="progress-bar">
            <div className="progress-title">{title}</div>
            <div className="progress">
                <div className="progress-fill" style={{ width: `${percentage}%` }}>
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;