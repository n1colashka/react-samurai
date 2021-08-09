import styles from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.image} alt="friend" />
            <span>{props.name}</span>
        </div>
    );
};

export default Friend;
