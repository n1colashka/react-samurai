import styles from "./Messages.module.css";
import User from "./User/User";
import Message from "./Message/Message";
import MessagesForm from "./MessagesForm/MessagesForm";
import React from "react";

const Messages = (props) => {    
    const messagesItems = props.messages.map(message => <Message sender={message.sender} key={message.id} text={message.text} />) ;
    const usersItems = props.users.map(user => <User name={user.name} key={user.id} id={user.id} />) ;

    return (
        <div className={styles.messages}>
            <div className={styles.users}>
                { usersItems}
            </div>
            <div className={styles.dialog}>
                { messagesItems }
                <MessagesForm addMessage={props.addMessage} />
            </div>
        </div>
    );
};

export default Messages;
