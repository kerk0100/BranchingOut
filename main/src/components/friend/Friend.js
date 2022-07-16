import './styles.css';

export default function Friend(props) {
    return (
        <div className="friend">
            <div className="friendCard">
                <div className="friendName">
                    <b> {props.name}</b>
                </div>
                <div className="friendInfo">
                    <input className='friendButton' type="button" value="Info"></input>
                </div>
            </div>
        </div>
    );
}