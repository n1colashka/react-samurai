import styles from "./User.module.css";
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.avatar}>
                <NavLink to={`./profile/${props.user.id}`}>
                    <img src={props.user.photos.small || userPhoto} alt="img" />
                </NavLink>
                <button
                    disabled={props.followingInProgress.some(id => id === props.user.id)}
                    onClick={() => {
                        props.toggleIsFollowingInProgress(true, props.user.id);
                        props.user.followed ? props.unfollowUser(props.user.id) : props.followUser(props.user.id);
                    }}
                >
                    {props.user.followed ? "Unfollow" : "Follow"}
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.name}>{props.user.name}</div>
                    <div className={styles.status}>{props.user.status}</div>
                </div>
                <div className={styles.location}>
                    <div>{"props.location.country"}</div>
                    <div>{"props.location.city"}</div>
                </div>
            </div>
        </div>
    );
};

export default User;
