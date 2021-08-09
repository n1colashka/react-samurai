import styles from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = (props) => {
    const path = `/messages/${props.id}`;

    return (
        <div className={styles.user}>
            <NavLink to={path} activeClassName={styles.active}>
                <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt="user" />
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
};

export default User;
