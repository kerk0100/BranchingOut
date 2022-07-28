import "./popup.css";

export default function PopUp(props) {

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>X</span>
                {props.content}
            </div>
        </div>
    );
}