import styles from "./Post.module.css";

const Post = () => {
    return (
        <li className={styles.item}>
            <img src="https://www.blexar.com/avatar.png" alt="" />
            <p>Post</p>
            <div className="like"></div>
        </li>
    )
};

export default Post;
