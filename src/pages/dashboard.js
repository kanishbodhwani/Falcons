import { Fragment , useCallback, useEffect, useRef, useState} from "react";
import { useNavigate} from "react-router-dom"; 
import { Link as ScrollLink } from "react-scroll";
import Review from "../components/Review/Review";
import styles from "../styles/dashboard.module.css";
import World from "../images/world.svg";
import Clubs from "../images/clubs.svg";
import EntrepreneurClub from "../images/entrepreneur.svg";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill , BsFillHeartFill, BsFillCalendarMinusFill, BsWhatsapp} from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaUniversity , FaDiscord} from "react-icons/fa";
import Card from "../components/Card/Card";

export default function Dashboard() {
    const navigate = useNavigate();
    const scrollRef = useRef();

    const [scroll , setScroll] = useState(0);
    const handleDiscord = () => {
        window.open('https://discord.gg/HheSa7h3xJ', "_blank");
    };

    const scrollLeft = () => setScroll(scroll - 1);
    const scrollRight = () => setScroll(scroll + 1);
    

    useEffect(() => {
        const scrollEl = scrollRef.current;
        let scrollVal = scroll;
        if(scrollVal < scroll) {
            scrollEl.scrollLeft = 200;
        } 

        if(scrollVal > scroll) {
            scrollEl.scrollLeft = -200;
        }
    }, [scroll]);


    return (
        <Fragment>
        <div className={styles.dashboard}>
            <div className={styles.blob}>
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                </svg>
            </div>
            <div className={styles.blob2}>
                <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
                </svg>
            </div>
            <div className={styles.row1}>
                <div className={styles.svg}>
                    <img src={World} alt="" />
                </div>
                <div className={styles.classicPara}>
                    <h1> Falcons </h1>
                    <p> A Community where people come together to build the future. 
                    We are working to change people lives by providing 
                    technical education and relevant skills.</p>
                    <button> <ScrollLink to="clubs" spy={true} smooth={true}> Know more </ScrollLink></button> 
                </div>
            </div>
            <div className={styles.row2} id="clubs">
                <div className={styles.clubDiv}>
                    <div className={styles.clubs}>
                        <h1> Clubs </h1>
                        <button onClick={() => navigate("/clubs")}> Explore </button>
                    </div>
                    <div className={styles.para}> Join a club of your interest and meet with 
                        great mentors and experts weekly.  
                    </div>
                    <div className={styles.clubsDiv}>
                        <BsFillArrowLeftCircleFill style={{ marginRight: "20px"}} cursor={"pointer"} color="#373a3f" size={"28px"} />
                        <Card 
                            img={EntrepreneurClub} 
                            name="Entrepreneurship club" 
                            about="Learn the basics of pitch a startup, pitch your ideas to investors, brainstorm with like minded people and many more." 
                            members={"1,000"}
                            buttonName="Join now"
                        />
                        <BsFillArrowRightCircleFill style={{ marginLeft: "20px"}} cursor={"pointer"} color="#373a3f" size={"28px"}/>
                    </div>
                </div>
                <div className={styles.svg2}>
                    <img src={Clubs} alt="" />
                </div>
            </div>
            <div className={styles.row3} id="events">
                <div className={styles.eventsPara}>
                    <div>
                        <h1> Events </h1>
                        <button onClick={() => navigate("/events")}> Event Library </button>
                    </div> 
                    <p> Get a chance to interact and learn from the industry exprets.   </p>
                    <h3> Upcoming events </h3>
                </div>
                <div className={styles.eventsDiv}>
                    <BsFillArrowLeftCircleFill onClick={() => scrollLeft()} color="#373a3f" size={"28px"} cursor={"pointer"} />                
                    <div className={styles.cards} ref={scrollRef}>
                        <Card
                            bgColor={"#fff"} 
                            img={EntrepreneurClub} 
                            name="HTML CSS" 
                            about="Learn the basics HTML, CSS and know how to build amazing websites " 
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
                        {/* <Card
                            bgColor={"#fff"} 
                            img={EntrepreneurClub} 
                            name="Firebase" 
                            about="Learn the basics of firebase, How to build a project in firebase, using authentication and so more." 
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
                        /> */}
                    </div>
                    <BsFillArrowRightCircleFill onClick={() => scrollRight()} cursor={"pointer"} color="#373a3f" size={"28px"}/>
                </div>
            </div>
            <div className={styles.row4} id="community">
                <h1> Why our members <BsFillHeartFill color="red" /> us </h1>
                <div className={styles.metrics}>
                    <div>
                        <IoIosPeople cursor={"pointer"} size={"5em"} color="#464c5e" />
                        <p> Members </p>
                    </div>
                    <div>
                        <FaUniversity cursor={"pointer"} size={"4em"} color="#464c5e"/>
                        <p> Schools and colleges across india  </p>
                    </div>
                    <div>
                        <BsFillCalendarMinusFill cursor={"pointer"} size={"3em"} color="#464c5e"/>
                        <p> Free events </p>
                    </div>
                </div>
                <div className={styles.reviews}>
                    <div>
                        <Review />
                        <Review />
                    </div>
                    <div>
                        <Review />
                        <Review />
                    </div>
                </div>
            </div>
            <div className={styles.row5}>
                <h1> Become a Falcon  Join our community </h1>
                <div>
                    <button onClick={() => window.open("https://chat.whatsapp.com/ETBVyju7hERDCZ1jgtovth", "_blank")} className={styles.whatsappButton}> 
                        <div>
                            <BsWhatsapp cursor={"pointer"} size={"2em"}/> 
                            <p>  Join our <h3> Whatsapp </h3>  </p>
                        </div>
                    </button>
                    <button onClick={handleDiscord} className={styles.discordButton}> 
                        <div> 
                            <FaDiscord cursor={"pointer"} size={"2.2em"}/>
                            <p> Join our <h3> Discord </h3></p>
                        </div>  
                    </button>
                </div>
            </div>
        </div>
        </Fragment>
    );
};



