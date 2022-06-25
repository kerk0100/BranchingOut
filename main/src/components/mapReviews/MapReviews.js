import './styles.css';

export default function MapReviews(props) {
    return (
        <div className="mapReview">
            <div className="cafeCard">
                <div className="cafeName">
                <b> {props.name}</b>
                </div>
                <div className="cafeDescription">
                    About: {props.description}
                </div>
            </div>
        </div>
    );
}