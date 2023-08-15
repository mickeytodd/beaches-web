import RatedBeach from "./RatedBeach";
import Card from "../UI/Card";
import './RatedBeaches.css';

const RatedBeaches = (props) => {

    return (
        <div>
            <h1 className="rated-beaches__title">Recently rated beaches</h1>
            <div className="rated-beaches__cards">
                <RatedBeach
                    title={props.data[0].title}
                    amount={props.data[0].amount}
                    date={props.data[0].date}
                    image={props.data[0].image}
                />
                <RatedBeach
                    title={props.data[1].title}
                    amount={props.data[1].amount}
                    date={props.data[1].date}
                    image={props.data[1].image} />

                <RatedBeach
                    title={props.data[2].title}
                    amount={props.data[2].amount}
                    date={props.data[2].date}
                    image={props.data[2].image} />
                <RatedBeach
                    title={props.data[3].title}
                    amount={props.data[3].amount}
                    date={props.data[3].date}
                    image={props.data[3].image} />
            </div>
        </div>
    )
}

export default RatedBeaches;
