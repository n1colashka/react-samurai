import styles from "./Post.module.css";
import likeIcon from "./like.svg";

const Post = (props) => {
    return (
        <li className={styles.item}>
            <img src="https://www.blexar.com/avatar.png" alt="" />
            <div className={styles.text}>
                <p>{props.message}</p>
            </div>
            <div className={styles.like}>
                <span>{props.likesCount}</span>
                <img src={likeIcon} alt="Like" />
            </div>
        </li>
    );
};

export default Post;
