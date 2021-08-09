import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.preloader} src={preloader} alt="" />
        </div>
    );
};

export default Preloader;