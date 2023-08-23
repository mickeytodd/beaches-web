import Header from './Header';
import RatedBeaches from './RatedBeaches/RatedBeaches';



const Home = ({ data }) => {
    return (
        <div className="home">
            <Header data={data} />
            <RatedBeaches data={data} />
        </div>
    );
}

export default Home;