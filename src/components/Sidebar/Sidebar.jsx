import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users" activeClassName={styles.active}>Find users</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/friends" activeClassName={styles.active}>Friends</NavLink>
                    <Friends items={props.state.friends} />
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
