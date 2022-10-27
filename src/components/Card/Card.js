import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";


export default function Card({ img, about, name, members , buttonName , bgColor}) {
    const navigate = useNavigate();

    return (
        <div className={styles.card} style={{ backgroundColor: `${bgColor}` }}>
            <img src={img} alt="clubphoto" />
            <div className={styles.cardAbout}>
                <h3> {name} </h3>
                <p> {about.split(" ").length > 12 ? (about.split(" ").slice(0,12).join(" ") + "...")  : about} </p>
            </div>
            <div className={styles.members}>
                <p> <span> {members} </span> Members </p>
                <button onClick={() => navigate("/join-now")}> {buttonName} </button>
            </div>
        </div>
    )
};

