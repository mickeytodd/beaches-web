import React from 'react';
import { useParams } from 'react-router-dom';



function BeachDetails({ data }) {
    const { id } = useParams();
    const beach = data.find(beach => beach.id === id);

    if (!beach) {
        return <div>Beach not found.</div>;
    }

    return (
        <div>
            <h1>{beach.title}</h1>
            <h2>Detalji</h2>
        </div>
    );
}

export default BeachDetails;
