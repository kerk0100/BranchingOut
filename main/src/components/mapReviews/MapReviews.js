import './styles.css';

export default function MapReviews(props) {
    return (
        <div className="mapReview">
            <div className="cafeCard">
                <div className="cafeName">
                <b> {props.cafeName}</b>
                </div>
                {/* <div className="reviewText">
                    {props.text}
                </div>
                <div className="reviewAuthor">
                    Submitted by: {props.author}
                </div> */}
                <div className="cafeDescription">
                    Hours: {props.hours}
                    <br/>
                    Address: {props.address}
                </div>
            </div>
        </div>
    );
}