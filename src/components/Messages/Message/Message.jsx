import styles from "./Message.module.css";

const Message = (props) => {
    let sender = props.sender;

    return (
        <div className={props.messageWrapper}>
            <div className={ `${styles.message} ${styles[sender]}`}>{props.text}</div>
        </div>
    );
};

export default Message;
