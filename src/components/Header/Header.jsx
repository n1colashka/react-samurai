import logo from "./logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.login}>
                { props.isAuth ?
                    <div>
                        <div>Hello, {props.login}</div>
                        <NavLink to={"/login"} onClick={props.logout}>Logout</NavLink>
                    </div>
                : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
