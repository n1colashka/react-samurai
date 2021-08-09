import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsItems = props.items.map(friend => <Friend image={friend.image} key={friend.id} name={friend.name}/>)
    
    return (
        <div className={styles.friends}>
            { friendsItems }
        </div>
    );
};

export default Friends;
