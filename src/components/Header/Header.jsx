import logo from "./logo.png";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className="header">
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
        </header>
    );
};

export default Header;
