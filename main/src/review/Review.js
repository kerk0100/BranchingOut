import './styles.css';

export default function Review(props) {
    return (
        <div className="review">
            <div className="reviewCard">
                <div className="reviewText">
                {props.text}
                </div>
                <div className="reviewAuthor">
                    Submitted by: {props.author}
                </div>
            </div>    
            <div className="reviewCoffeeShop">
                {props.coffeeShop}
            </div>
        </div>
    );
}