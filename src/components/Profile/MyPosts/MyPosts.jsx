import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <div className={styles.title}>My posts:</div>
            <form action="#" className={styles.form}>
                <textarea placeholder="Your news..."></textarea>
                <button>Add post</button>
            </form>
            <ul className={styles.list}>
                <Post />
                <Post />
            </ul>
        </div>
    );
};

export default MyPosts;
