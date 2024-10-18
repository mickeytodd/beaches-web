import Card from '../UI/Card';
import './TopBeach.css';

const TopBeach = (props) => {


    return (
        <Card className='top-beach'>
            <div className='top-beach__wrapper'>
                <img src={props.image} alt="beach image" className='top-beach__image' />
                <h2 className='top-beach__title'>{props.title}</h2>
            </div>
        </Card>
    );
}

export default TopBeach; 