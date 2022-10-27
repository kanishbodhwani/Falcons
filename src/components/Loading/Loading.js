import styles from "./Loading.module.css";
import Falcons from "../../images/falcons-logo.svg";

export default function Loading () {
    return (
        <div className={styles.loading}>
            <img src={Falcons} alt="falcons" />
        </div>
    )
};

