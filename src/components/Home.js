import React from 'react'
import Header from './Header';
import RatedBeaches from './RatedBeaches/RatedBeaches';


function Home({ data }) {
    return (
        <div>
            <Header data={data} />
            <RatedBeaches data={data} />
        </div>
    )
}

export default Home
