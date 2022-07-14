import './styles.css';

export default function MapReviews(props) {
    return (
        <div className="mapReview">
            <div className="cafeCard">
                <div className="cafeName">
                <b> {props.cafeName}</b>
                </div>
                <div className="cafeDescription">
                    Reviews: {props.reviews}
                    <br/>
                    Hours: {props.hours}
                </div>
            </div>
        </div>
    );
}