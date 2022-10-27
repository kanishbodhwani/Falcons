import Card from "../components/Card/Card";
import styles from "../styles/clubs.module.css";
import EntrepreneurClub from "../images/entrepreneur.svg";

export default function Clubs () {
    return (
        <div className={styles.club}>
            <h1> Falcon Clubs </h1>
            <button onClick={() => window.open('https://discord.gg/HheSa7h3xJ', "_blank")}> Discord </button>
            <div className={styles.clubs}>
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
                <Card 
                    img={EntrepreneurClub} 
                    name="Entrepreneurship club" 
                    about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                    members={"1,000"}
                    buttonName="Join now"
                />
            </div>
        </div>
    )
};

