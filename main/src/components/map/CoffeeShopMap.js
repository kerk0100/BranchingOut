import "../coffeeShop/styles.css";

export default function CoffeeShopMap(props) {
    return (
        <div className="coffeeShop">
                <img src={props.image}/>
                <div className="overlay">
                    <div className="coffeeShopName"> {props.name}</div>
            </div>
        </div>
    );
}