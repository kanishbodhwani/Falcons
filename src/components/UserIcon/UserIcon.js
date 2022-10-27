import { Fragment } from "react";
import styles from "./UserIcon.module.css";

export default function UserIcon ({src, alt, borderColor}) {
    return (
        <Fragment>
            <img src={src} alt={alt} className={styles.image} style={{ borderColor: `${borderColor}`}} />
        </Fragment>   
    )
};

