import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { BsInstagram, BsLinkedin, BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h2>About us</h2>
            <div className={styles.about}>
                Falcons is a growing community of individuals who are 
                aiming for marvellous opportunities in the community and 
                learning from outstanding teachers which gives them breathtaking 
                expeirience. 
                Our mission is to create a space for optimists, idealists ,dreamers and leaders, 
                So that they can create greater things with like minded people for better future. 
            </div> 
            <div className={styles.tc}>
                <div className={styles.legal}>
                    <h3> Legal </h3>
                    <ul> 
                        <li> <Link to="/terms-and-conditions"> Terms & Conditions </Link> </li> 
                        <li> <Link to="/privacy-policy"> Privacy Policy </Link> </li> 
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h3> Contact us </h3>
                    <Link onClick={() => window.open("mailto:officialsfalcons@gmail.com", "_blank")} to="#"> officialsfalcons@gmail.com </Link> 
                </div>
                <div className={styles.socials}>
                    <h3> Socials </h3>
                    <div>
                        <BsInstagram color="rgb(231, 229, 229)" size={"1.5em"}/>
                        <BsLinkedin color="rgb(231, 229, 229)" size={"1.5em"}/>
                        <BsYoutube color="rgb(231, 229, 229)" size={"1.5em"}/>
                        <BsFacebook color="rgb(231, 229, 229)" size={"1.5em"}/>
                        <BsTwitter color="rgb(231, 229, 229)" size={"1.5em"}/>
                    </div>
                </div>
            </div>
            <hr />
            <p> © 2022, Falcons Community. All Rights Reserved.</p>
        </div>
    )
};
