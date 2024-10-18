import RatedBeach from "./RatedBeach";
import './RatedBeaches.css';
import TopBeach from "./TopBeach";

const RatedBeaches = (props) => {

    return (
        <div className="beaches-section">
            <div className="rated-beaches">
                <h2 className="rated-beaches__title">Recently rated beaches</h2>
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
                        title={props.data[5].title}
                        amount={props.data[5].amount}
                        image={props.data[5].image} />
                    <RatedBeach
                        title={props.data[3].title}
                        amount={props.data[3].amount}
                        image={props.data[3].image} />
                </div>
            </div>
            <div className="top-beaches">
                <h2 className="top-beaches__title">Top rated beaches</h2>
                <div className="top-beaches__cards">
                    <TopBeach
                        title={props.data[10].title}
                        amount={props.data[10].amount}
                        image={props.data[10].image}
                    />
                    <TopBeach
                        title={props.data[8].title}
                        amount={props.data[8].amount}
                        image={props.data[8].image} />

                    <TopBeach
                        title={props.data[6].title}
                        amount={props.data[6].amount}
                        image={props.data[6].image} />
                    <TopBeach
                        title={props.data[12].title}
                        amount={props.data[12].amount}
                        image={props.data[12].image} />
                </div>
            </div>
        </div>
    )
}

export default RatedBeaches;
