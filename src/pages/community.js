import { Fragment } from "react";
import styles from "../styles/community.module.css";
import CommunityImage from "../images/community.svg";
import Card from "../components/Card/Card";
import Design from "../images/design.svg";
import Coding from "../images/coding.svg";

export default function Community () {
    return (
        <Fragment>
            <div className={styles.community}>
                <h1> A place where people share ideas and <span>Re</span>invent the future </h1> 
                <img src={CommunityImage} alt="community" />
            </div>
            <div className={styles.designCommunity}>
                <h1> Our design community </h1>
                <div>
                    <div>
                        <p> "Design is not something how it looks but how it works" </p>
                        <p> ~ Steve Jobs </p> 
                    </div>
                    <Card buttonName="Join now" img={Design}  name="Design Community" members={300} about="Join our design community with great designers all over the world" />
                </div>
            </div>
            <div className={styles.codingCommunity}>
                <h1> Coding community </h1>
                <div>
                    <Card buttonName="Join now" img={Coding}  name="Coding Community" members={300} about="Thousands of programmers join in to get exposure and skills required to land the dream job they want" />
                    <div>
                        <p> "You can never understand everything. But, you should push yourself to understand the system."  </p>
                        <p> ~ Ryan Dahl (Creator of Node js) </p> 
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
