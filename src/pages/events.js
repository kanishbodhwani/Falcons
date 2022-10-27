import { Fragment } from "react";
import styles from "../styles/events.module.css";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import EntrepreneurClub from "../images/entrepreneur.svg";
import { BsWhatsapp } from "react-icons/bs";

export default function Events () {
    return (
        <Fragment>
            <div className={styles.event}>  
                <h1> Get notified for amazing events </h1>
                <button onClick={() => window.open("https://chat.whatsapp.com/ETBVyju7hERDCZ1jgtovth", "_blank")}> 
                    <div>
                        <BsWhatsapp cursor={"pointer"} size={"2em"}/> 
                        <p>  Join our Whatsapp </p>
                    </div>
                </button>
            </div>
            <div className={styles.upcomingEvents}>
                <h1> Upcoming Workshop </h1>
                <div className={styles.eventCards}>
                    <Card
                        bgColor={"#fff"}     
                        img={EntrepreneurClub} 
                        name="HTML CSS" 
                        about="Learn the basics of website design and become a pro designer." 
                        members={"1,000"}
                        buttonName="Register"
                    />
                    <Card
                        bgColor={"#fff"}     
                        img={EntrepreneurClub} 
                        name="Javascript" 
                        about="Learn the basics of Javascript become a pro javascript developer every company wants." 
                        members={"1,000"}
                        buttonName="Register"
                    />
                    <Card
                        bgColor={"#fff"} 
                        img={EntrepreneurClub} 
                        name="Firebase" 
                        about="Learn the basics of firebase, How to build a project in firebase, using authentication and so more." 
                        members={"1,000"}
                        buttonName="Register"
                    />
                </div>
                <h3> <Link to="/join-now"> Join now </Link> to get enrolled in the workshop </h3>
            </div>
        </Fragment>
    )
}