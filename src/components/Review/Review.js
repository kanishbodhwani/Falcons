import UserIcon from "../UserIcon/UserIcon";
import styles from "./Review.module.css";

export default function Review () {
    return (
        <div className={styles.review}>
            <div>
                <h3> Anubhav Singh </h3>
                <UserIcon src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            </div>
            <p> At Falcons I learnt how to be consistent and how to interact with others. I also learnt various things related to freelancing. </p> 
        </div>
    )
};

