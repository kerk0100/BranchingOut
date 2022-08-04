import "./styles.css";

export default function CoffeeShop(props) {
    return (
        <div className="coffeeShop">
                <img src={props.image}/>
                <div className="overlay">
                    <div className="coffeeShopName"> {props.name}</div>
                    <div className="coffeeShopHours"> {props.hours}</div>
            </div>
        </div>
    );
}