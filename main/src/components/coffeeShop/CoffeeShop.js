import "./styles.css";

export default function CoffeeShop(props) {
    return (
        <div className="coffeeShop">
                <img src={props.image}/>
                <div className="overlay">
                    <div class="coffeeShopName"> {props.name}</div>
                    <div class="coffeeShopHours"> {props.hours}</div>
            </div>
        </div>
    );
}