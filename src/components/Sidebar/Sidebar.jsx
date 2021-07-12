import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li className={classes.item}>
                    <a href="#s">Profile</a>
                </li>
                <li className={classes.item}>
                    <a href="#s">Messages</a>
                </li>
                <li className={classes.item}>
                    <a href="#s">News</a>
                </li>
                <li className={classes.item}>
                    <a href="#s">Music</a>
                </li>
                <li className={classes.item}>
                    <a href="#s">Settings</a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
