import RatedBeach from "./RatedBeach";
import './RatedBeaches.css';

const RatedBeaches = (props) => {

    return (
        <div className="rated-beaches">
            <h1 className="rated-beaches__title">Recently rated beaches</h1>
            <div className="rated-beaches__cards">
                <RatedBeach
                    title={props.data[0].title}
                    amount={props.data[0].amount}
                    image={props.data[0].image}
                />
                <RatedBeach
                    title={props.data[1].title}
                    amount={props.data[1].amount}
                    image={props.data[1].image} />

                <RatedBeach
                    title={props.data[2].title}
                    amount={props.data[2].amount}
                    image={props.data[2].image} />
                <RatedBeach
                    title={props.data[3].title}
                    amount={props.data[3].amount}
                    image={props.data[3].image} />
                <RatedBeach
                    title={props.data[4].title}
                    amount={props.data[4].amount}
                    image={props.data[4].image} />
            </div>
        </div>
    )
}

export default RatedBeaches;
