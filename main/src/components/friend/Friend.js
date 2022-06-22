import './styles.css';

export default function Friend(props) {
    return (
        <div className="friend">
            <div className="friendCard">
                <div className="friendName">
                <b> {props.name}</b>
                </div>
                <div className="friendReviewCount">
                    Reviews posted: {props.count}
                </div>
            </div>
        </div>
    );
}