import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostsForm from "./PostsForm/PostsForm";

const MyPosts = (props) => {

    const postsItems = props.posts.map(post => <Post message={post.text} key={post.id} likesCount={post.likesCount} />);

    return (
        <div className={styles.posts}>
            <div className={styles.title}>My posts:</div>
            <div className={styles.form}>
                <PostsForm addPost={props.addPost}/>
            </div>
            <ul className={styles.list}>
                { postsItems }
            </ul>
        </div>
    );
};

export default MyPosts;
