import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={`content ${styles.profile}`}>
            <div className={styles.background}>
                <img
                    src="https://images.pexels.com/photos/5133461/pexels-photo-5133461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
            </div>
            <div className={styles.body}>
                <div className={styles.avatar}>
                    <img src="https://schoolsw3.com/tryit/avatar.png" alt="" />
                </div>
                <div className={styles.info}>Age: 22</div>
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;
