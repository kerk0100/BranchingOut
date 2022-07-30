import './styles.css';

export default function MapReviews(props) {
    return (
        <div className="mapReview">
                <div className="cafeCard">
                    <div className="reviewText">
                    <div className='reviewAuthor'><strong>{props.author}:</strong></div>
                    {props.text}
                    </div>

                <div className="reviewButtons">  
            </div>  
            </div>    
            <div className="reviewCoffeeShop">
                {props.coffeeShop}
            </div>
        </div>
    );
}