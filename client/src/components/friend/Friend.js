import './styles.css';
import { removeFriendAsync } from "../../reducers/users/thunk";
import { useDispatch } from "react-redux";

export default function Friend(props) {
    const dispatch = useDispatch();
    async function handleRemoveFriend(e) {
        const addF = await dispatch(removeFriendAsync([localStorage.username, props.name]));
        var messageStr
        if (addF.payload.message === "User cannot be found :(") {
            return
        } else if (addF.payload.message === "You are not friends with that user") {
            return 
        } else {
          window.location.reload()
          return
        }
    }
    

    return (
        <div className="friend">
            <div className="friendCard">
                <div className="friendName">
                    <b> {props.name}</b>
                    <input className="button-22" onClick={handleRemoveFriend} value="-"></input>
                    
                </div>
            </div>
        </div>
    );
}